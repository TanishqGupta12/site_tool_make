import prisma from "../../../../../prisma";
import { createHandler } from "@premieroctet/next-admin/appHandler";
import options from "../../../admin/nextAdminOptions";
// bg-nextadmin-background-default dark:bg-dark-nextadmin-background-emphasis border-nextadmin-border-default dark:border-dark-nextadmin-border-default max-w-screen-lg rounded-lg border p-4 sm:p-8
const { run } = createHandler({
  apiBasePath: "/api/admin",
  prisma,
  options
});
 
export { run as DELETE, run as GET, run as POST };
