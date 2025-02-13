import type { NextAdminOptions } from "@premieroctet/next-admin";

const options: NextAdminOptions = {
  title: "Dashboard",

  model: {
    Domain: {
      toString: (domain) => `(${domain.id})  (${domain.domain_name}) (${domain.subdomain_name})`,
      title: "Domain",
      icon: "AdjustmentsVerticalIcon",
      list: {
      },
    },

    Event: {
      toString: (event) => `(${event.id})  (${event.name})`,
      title: "Event",
      icon: "Cog8ToothIcon",
      list: {
      },
    },
    User: {
      toString: (user) => `(${user.id})  (${user.email}) `,
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
      toString: (role) => `(${role.id.toString()}) (${role.name})  `,
      title: "Role",
      icon: "IdentificationIcon",
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
