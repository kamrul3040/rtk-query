import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllApi = createApi({
  reducerPath: "allApiGet",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getDataFromApi: builder.query({
      query: () => "posts",
    }),
    addData: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetDataFromApiQuery, useAddDataMutation } = getAllApi;
