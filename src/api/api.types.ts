export interface IApiUser {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  status: string;
  universityTie: string;
}

export interface IApiPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  categories: IApiCategory[];
}

export interface IApiCategory {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface IApiCreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  universityTie: string;
}

export interface IApiCreatePageData {
  title: string;
  content: string;
  slug: string;
  imageBase64: unknown;
  imageFileType: string;
}

export interface IMetaProps {
  page: number;
  per: number;
  total: number;
}

export interface IListPagesResponse {
  pages: IApiPage[];
  meta: IMetaProps;
}

export interface ILoginResponse {
  token: string;
  auth: boolean;
}

export interface IListCategoriesResponse {
  categories: IApiCategory[];
  meta: IMetaProps;
}

export type ApiGetPage = (pageSlug: string) => Promise<IApiPage>;

export type ApiDeletePage = (pageID: string) => Promise<void>;

export type ApiCreatePage = (pageData: IApiCreatePageData) => Promise<IApiPage>;

export type ApiListPages = (params: { searchParam?: string; page?: number }) => Promise<IListPagesResponse>;

export type ApiLogin = (params: { email: string; password: string }) => Promise<ILoginResponse>;

export type ApiSignup = (data: IApiCreateUserData) => Promise<void>;

export type ApiListCategories = (params: { searchParam?: string; page?: number }) => Promise<IListCategoriesResponse>;

export type ApiGetUserInfo = () => Promise<IApiUser>;

export type ApiConfirmAccount = (token: string) => Promise<any>;
