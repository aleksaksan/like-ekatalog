import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ICategory } from "../../models/responses/ICategoryResponse";
import { AppDispatch } from "../store";
import { categorySlice } from "./CategorySlice";

//
// export const fetchCategories = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(categorySlice.actions.categoryFetching());

//     const response = await axios(
//     {
//       method: 'get',
//       baseURL: 'https://dummyjson.com/',
//       url: 'products/categories',
//       responseType: 'json',
//     });
//     const categories: ICategory[] = response.data.map((item: string, index: number) => {
//         const categoryItem: ICategory = {
//           id: index,
//           name: item
//         };
//         return categoryItem;
//       });
//     dispatch(categorySlice.actions.categoryFetchingSuccess(categories));
//   } catch (error) {
//     dispatch(categorySlice.actions.categoryFetchingError((error as AxiosError).message));
//   }
// };

//
//https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const response = await axios(
    {
      method: 'get',
      baseURL: 'https://dummyjson.com/',
      url: 'products/categories',
      responseType: 'json',
    });
    const categories: ICategory[] = response.data.map((item: string, index: number) => {
        const categoryItem: ICategory = {
          id: index,
          name: item
        };
        return categoryItem;
      });
      return categories;
  }
);
