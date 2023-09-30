import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTg4YzBkZGZiMTg0OWE5MWM4NjNkMmUzM2I1MzZhNiIsInN1YiI6IjY1MTZiZjNkYzUwYWQyMDEyYzE4M2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ygOCxz_iHw7LIfiSFIYMkK9gHjMGxGeduKquWGjTwQM";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["popular" , "movieGenres"],
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

    getMovieGenres: builder.query({
      query: () => "genre/movie/list?language=en",
      providesTags: () => ["movieGenres"],
    }),
  }),
});

export const { useGetPopularMoviesQuery , useGetMovieGenresQuery } = api;