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

    getFindByIdTv: builder.query({
      query: (series_id) => `tv/${series_id}`,
      providesTags: () => ["tv"],
      
    }),

    getTvActors: builder.query({
      query: (series_id) => `tv/${series_id}/credits`,
      providesTags: () => ["tvActors"],
      
    }),

    getTvRecomendation: builder.query({
      query: (series_id) => `tv/${series_id}/recommendations`,
      providesTags: () => ["tvRecomendation"],
      
    }),

    getSimilarTv: builder.query({
      query: (series_id) => `tv/${series_id}/similar`,
      providesTags: () => ["similarTv"],
      
    }),

    getTvReviews: builder.query({
      query: (series_id) => `tv/${series_id}/reviews`,
      providesTags: () => ["tvReviews"],
      
    }),

    getTvMedia : builder.query({
      query: (series_id) => `tv/${series_id}/images?include_image_language=en&language=en`,
      providesTags: () => ["tvMedia"],
      
    }),


    getTvTrailer : builder.query({
      query: (series_id) => `tv/${series_id}/videos`,
      providesTags: () => ["tvTrailer"],
      
    }),

    getTvGenres: builder.query({
      query: () => "genre/tv/list?language=en",
      providesTags: () => ["tvGenres"],
    }),
  })
})


export const {useGetPopularTvSeriesQuery , useGetTvSeriesGenresQuery , useGetFindByIdTvQuery , useGetTvActorsQuery , useGetTvRecomendationQuery ,useGetSimilarTvQuery , useGetTvReviewsQuery , useGetTvMediaQuery , useGetTvTrailerQuery , useGetTvGenresQuery} = tvSeriesApi