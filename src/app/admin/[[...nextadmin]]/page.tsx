// src/app/admin/[[...nextadmin]]/page.tsx
import { NextAdmin, PageProps } from "@premieroctet/next-admin";
import { getNextAdminProps } from "@premieroctet/next-admin/appRouter";
import prisma from "../../../../prisma";
import "../../../../nextAdminCss.css";
import options from "../nextAdminOptions";

import Dashboard from "../../../compoments/Dashboard";

// Since we're in the App Directory, we can fetch data directly inside the component
const AdminPage = async ({ params, searchParams }: PageProps) => {
  const resolvedParams =  await params;
  const resolvedSearchParams = await searchParams;

  // Fetch the props using getNextAdminProps
  const props = await getNextAdminProps({
    params: resolvedParams?.nextadmin,
    searchParams: resolvedSearchParams,
    basePath: "/admin",
    apiBasePath: "/api/admin",
    prisma,
    options
  });

  return <NextAdmin {...props} 
  dashboard={Dashboard}
  user={{
    data: {
      name: "John Doe",
    },
    logout: "/api/auth/logout",
  }}
  />;
};

export default AdminPage;
