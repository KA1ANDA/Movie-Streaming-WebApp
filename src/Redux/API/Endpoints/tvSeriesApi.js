import { api } from "../api";

const tvSeriesApi = api.injectEndpoints({ 
  endpoints:(builder) => ({
    getPopularTvSeries:builder.query({
      query:()=>'tv/popular?language=en-US',
      providesTags: () => ['tvSeriesPopular']
    }),
    getTvSeriesGenres: builder.query({
      query: () => "genre/tv/list?language=en",
      providesTags: () => ["TvSeriesGenres"],
    }),
  })
})


export const {useGetPopularTvSeriesQuery , useGetTvSeriesGenresQuery} = tvSeriesApi