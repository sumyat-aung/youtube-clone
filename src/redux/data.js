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
        url: "/search?relatedToVideoId=O62kAvoO9lM&part=id%2Csnippet&type=video&maxResults=50",
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

    getVideoDetails: builder.query({
      query: (id) => ({
        url: `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, // this should take only one argument
      }),
    }),

    getChannelDetails: builder.query({
      query: (id) => ({
        url: `channels?part=snippet%2Cstatistics&id=${id}`, // this should take only one argument
      }),
    }),

    getChannelVideos: builder.query({
      query: (id) => ({
        url: `search?channelId=${id}&part=snippet%2Cid&maxResults=50`, // this should take only one argument
      }),
    }),
  }),
});

export const {
  useGetFeedQuery,
  useGetSearchQuery,
  useGetExploreQuery,
  useGetVideoDetailsQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} = youtubeApi;

//
