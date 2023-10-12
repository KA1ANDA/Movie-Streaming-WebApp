import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTg4YzBkZGZiMTg0OWE5MWM4NjNkMmUzM2I1MzZhNiIsInN1YiI6IjY1MTZiZjNkYzUwYWQyMDEyYzE4M2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ygOCxz_iHw7LIfiSFIYMkK9gHjMGxGeduKquWGjTwQM";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["popular" , "movieGenres" , "accountInfo", "watchlist"  , "nowPlaying" , "trendingMovies" , "movies" , "topRatedMovies" , "tvSeriesPopular" , "TvSeriesGenres" , "findByGenres" , "movie" , "actors" , "similarMovies" , "movieRecomendation" ,"movieReviews"],
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
  } = api;