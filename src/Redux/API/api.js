import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTg4YzBkZGZiMTg0OWE5MWM4NjNkMmUzM2I1MzZhNiIsInN1YiI6IjY1MTZiZjNkYzUwYWQyMDEyYzE4M2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ygOCxz_iHw7LIfiSFIYMkK9gHjMGxGeduKquWGjTwQM";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["popular" , "movieGenres" , "accountInfo", "watchlist"  , "nowPlaying" , "trendingMovies" , "movies" , "topRatedMovies" , "tvSeriesPopular" , "TvSeriesGenres" , "findByGenres" , "movie" , "tv", "actors" ,"tvActors", "similarMovies" , "movieRecomendation" ,"movieReviews" , "moviePosters" , "movieBackdrops" , "movieFiltered" , "movieTrailer" , "people" , "tvRecomendation" , "similarTv" ,"tvReviews" , "tvMedia" , "tvTrailer" , "tvGenres" , "search"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${API_KEY}`);
      return headers;
    },
  }),
  

  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => "movie/popular?language=en-US&page=1",
      providesTags: () => ["popular"],
      
    }),

    getLatestMovies: builder.query({
      query: () => "movie/now_playing?language=en-US&page=1",
      providesTags: () => ["nowPlaying"],
      
    }),

    getTrendingMovies: builder.query({
      query: (time_window) => `trending/movie/${time_window}`,
      providesTags: () => ["trendingMovies"],
      
    }),

    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?language=en-US`,
      providesTags: () => ["topRatedMovies"],
      
    }),

    getMovieGenres: builder.query({
      query: () => "genre/movie/list?language=en",
      providesTags: () => ["movieGenres"],
    }),

    getFindByGenres: builder.query({
      query: (genreId) => `discover/movie?with_genres=${genreId}`,
      providesTags: () => ["findByGenres"],
    }),


    getMovieFiltered: builder.query({
      query({sortOption , filterParams , page}) {
        const {genreId , fromDate , toDate , userScore , userVotes , movieTime ,listType} = filterParams
        const releaseDateGte = listType==='movie' ? 'release_date.gte' : 'air_date.gte'
        const releaseDateLte = listType==='movie' ? 'release_date.lte' : 'air_date.lte'

       
        return{
          // url:`discover/movie?with_genres=${genreId}&sort_by=${'popularity.desc'}&with_runtime.gte=${62}&with_runtime.lte=${30}&primary_release_date.gte=${'2023-07-08'}&primary_release_date.lte=${'2023-05-08'}`,
          url:`discover/${listType}?include_adult=false&sort_by=${sortOption}&with_genres=${genreId}&${releaseDateGte}=${fromDate}&${releaseDateLte}=${toDate}&vote_average.gte=0&vote_average.lte=${userScore}&vote_count.gte=${userVotes}&with_runtime.gte=0&with_runtime.lte=${movieTime}&page=${page}&anguage=en-US`,
        }
      },
      providesTags: () => ["movieFiltered"],
    }),

    getSearch: builder.query({
      query: (value) => `search/multi?query=${value}&include_adult=false&language=en-US&page=1`,
      providesTags: () => ["search"],
    }),
    

    






    getMyAccountInfo: builder.query({
      query: () => "account/me",
      providesTags: () => ["accountInfo"],
    }),

  

    addToWatchlist: builder.mutation({
      query(params) {
        const {profileId , movieId} = params
        
        return{
          url:`account/${profileId}/watchlist`,
          method:'POST',
          body:{
            media_type: 'movie',
            media_id: movieId,
            watchlist: true}
        }
      },
      invalidatesTags: ['watchlist'],
    }),
  }),
});

export const { 
  useGetPopularMoviesQuery,
  useGetMovieGenresQuery , 
  useGetMyAccountInfoQuery ,
  useAddToWatchlistMutation , 
  useGetLatestMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetFindByGenresQuery,
  useGetMovieFilteredQuery,
  useGetSearchQuery} = api;