import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../key/key";

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com", //added base url
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFeed: builder.query({
      query: () => ({
        url: "/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
      }),
    }),
    getSearch: builder.query({
      query: (q) => ({
        url: `/search?q=${q}&part=snippet%2Cid&maxResults=50`, // this should take only one argument
      }),
    }),
    getExplore: builder.query({
      query: () => ({
        url: `/search?relatedToVideoId=lY2yjAdbvdQ&part=id%2Csnippet&type=video&maxResults=50`, // this should take only one argument
      }),
    }),
  }),
});

export const { useGetFeedQuery, useGetSearchQuery, useGetExploreQuery } =
  youtubeApi;
