import prisma from "../../../../../prisma";
import { createHandler } from "@premieroctet/next-admin/appHandler";
import options from "../../../admin/nextAdminOptions";

const { run } = createHandler({
  apiBasePath: "/api/admin",
  prisma,
  options
});
 
export { run as DELETE, run as GET, run as POST };
