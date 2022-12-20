export interface IApiPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
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

export type ApiGetPage = (pageSlug: string) => Promise<IApiPage>;
export type ApiDeletePage = (pageID: string) => Promise<void>;
export type ApiCreatePage = (pageData: IApiCreatePageData) => Promise<IApiPage>;
export type ApiListPages = (params: {
  searchParam?: string;
  page?: number;
}) => Promise<IListPagesResponse>;
export type ApiLogin = (params: {
  email: string;
  password: string;
}) => Promise<ILoginResponse>;
export type ApiSignup = (data: IApiCreateUserData) => Promise<void>;
