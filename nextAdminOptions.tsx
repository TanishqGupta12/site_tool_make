import type { NextAdminOptions } from "@premieroctet/next-admin";

const options: NextAdminOptions = {
  title: "Dashboard",

  model: {
    User: {
      toString: (user) => ` (${user.email})`,
      title: "Users",
      icon: "UsersIcon",
      list: {
        search: ["email"],
        filters: [
          {
            name: "Users",
            active: false,
            value: {
             
            },
          },
        ],
      },
    },
    Role: {
      toString: (role) => ` (${role.name})`,
      title: "Role",
      icon: "UsersIcon",
      list: {
      },
    },
  },
  pages: {
    "/custom": {
      title: "Custom page",
      icon: "AdjustmentsHorizontalIcon",
    },
  }
}

export default options;
