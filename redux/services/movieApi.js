import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const movieApi = createApi({
    reducerPath: "[movieId]",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query({ query: () => "movies" }),
        getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
        getReviews: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` }),
        getCinemas: builder.query({ query: () => "cinemas" }),
        getMoviesCinema: builder.query({ query: (movieId) => `movies?cinemaId=${movieId}` }),
    }),
});

export const {useGetMoviesQuery, useGetMovieQuery, useGetReviewsQuery, useGetCinemasQuery,useGetMoviesCinemaQuery } = movieApi;
