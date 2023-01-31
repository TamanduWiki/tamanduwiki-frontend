import api from "@/infra/api";

import {
  ApiCreatePage,
  ApiDeletePage,
  ApiGetPage,
  ApiLogin,
  ApiListPages,
  IApiPage,
  IListPagesResponse,
  ILoginResponse,
  ApiSignup,
  ApiListCategories,
  IListCategoriesResponse,
  ApiGetUserInfo,
  IApiUser,
} from "./api.types";

// Pages

export const apiGetPage: ApiGetPage = async (pageSlug) =>
  await api.get<IApiPage>(`/pages/${pageSlug}`).then(({ data }) => data);

export const apiDeletePage: ApiDeletePage = async (pageID) => {
  await api.delete(`/pages/${pageID}`);
};

export const apiCreatePage: ApiCreatePage = async (pageData) =>
  await api.post<IApiPage>("/pages", pageData).then(({ data }) => data);

export const apiListPages: ApiListPages = async ({ searchParam, page }) =>
  await api
    .get<IListPagesResponse>("/pages", { params: { page, searchFor: searchParam } })
    .then(({ data }) => data);

// Categories

export const apiListCategories: ApiListCategories = async ({ searchParam, page }) =>
  await api
    .get<IListCategoriesResponse>("/categories", { params: { page, searchFor: searchParam } })
    .then(({ data }) => data);

// Users

export const apiGetUserInfo: ApiGetUserInfo = async () =>
  await api.get<IApiUser>(`/user-info`).then(({ data }) => data);

// Auth

export const apiLogin: ApiLogin = async (loginParams) =>
  await api
    .post<ILoginResponse>("/login", loginParams)
    .then(({ data }) => data);

export const apiSignup: ApiSignup = async (signupParams) =>
  await api.post("/users", signupParams);
