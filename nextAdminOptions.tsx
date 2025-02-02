import type { NextAdminOptions } from "@premieroctet/next-admin";

const options: NextAdminOptions = {
  title: "My awesome admin",

  model: {
    User: {
      toString: (user) => `${user.name} (${user.email})`,
      title: "Users",
      icon: "UsersIcon",
      list: {
        search: ["name", "email"],
        filters: [
          {
            name: "is Admin",
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
