import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { setCookie } from "nookies";

import api from "@/infra/api";

export const serverSideAuthCheck = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  let authenticated = false;

  try {
    const responseAuth = await api
      .get("/ensure-authenticated")
      .then(({ data }) => data?.auth || false);

    authenticated = responseAuth;
  } catch (error: any) {}

  if (!authenticated) {
    setCookie(context, "destinationAfterLogin", context.resolvedUrl);

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return { props: {} };
};
