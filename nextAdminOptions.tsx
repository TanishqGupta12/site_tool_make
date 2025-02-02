import type { NextAdminOptions } from "@premieroctet/next-admin";

const options: NextAdminOptions = {
  title: "Dashboard",

  model: {
    User: {
      toString: (user) => `${user.name} (${user.email})`,
      title: "Users",
      icon: "UsersIcon",
      list: {
        search: ["name", "email"],
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
  }
}

export default options;
