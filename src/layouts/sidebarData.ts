// src/data/sidebarData.ts
export interface SidebarItem {
  label: string;
  icon?: React.ReactNode; // Icon component
  path?: string; // Route path (optional if there are sub-items)
  badge?: string; // Optional badge for items like "Soon"
  children?: SidebarItem[]; // Sub-items
}

export interface SidebarSection {
  heading: string;
  items: SidebarItem[];
}

export const sidebarSections: SidebarSection[] = [
  {
    heading: "", // Empty string for no heading
    items: [
      {
        label: "Dashboard",
        icon: "ki-element-11",
        path: "/dashboard",
      },
    ],
  },
  {
    heading: "Menu",
    items: [
      {
        label: "User",
        icon: "ki-profile-circle",
        children: [
          {
            label: "View Customers",
            path: "/customers",
          },
          {
            label: "Add Customers",
            path: "/customers/add",
          },
        ],
      },
      {
        label: "Admin",
        icon: "ki-security-user",
        children: [
          {
            label: "All",
            path: "/admins",
          },
          {
            label: "Create",
            path: "/admins/add",
          },
          {
            label: "Roles & Permissions",
            path: "/admins/roles",
          },
        ],
      },
      {
        label: "Transaction",
        icon: "ki-bank",
        children: [
          {
            label: "Payments",
            path: "/transactions/payments",
          },
          {
            label: "Invoices",
            path: "/transactions/invoices",
          },
          {
            label: "Wallet",
            path: "/transactions/wallets",
          },
        ],
      },
      {
        label: "Errand",
        icon: "ki-call",
        children: [
          {
            label: "View Errands",
            path: "/errands",
          },
          {
            label: " Categories",
            path: "/errands/categories",
          },
        ],
      },
      {
        label: "Content",
        icon: "ki-notepad-edit",
        children: [
          {
            label: "FAQs",
            path: "/content/faqs",
          },
        ],
      },
      // {
      //   label: "Analytics & Reports",
      //   icon: "ki-chart-simple-2",
      //   children: [
      //     {
      //       label: "User Activity",
      //       path: "/reports/user-activity",
      //     },
      //     {
      //       label: "Subscription Reports",
      //       path: "/reports/subscriptions",
      //     },
      //     {
      //       label: "Errand Reports",
      //       path: "/reports/errands",
      //     },
      //   ],
      // },
      // {
      //   label: "Activities",
      //   icon: "ki-notification-on",
      //   path: "/activities",
      // },
      {
        label: "Settings",
        icon: "ki-setting-3",
        path: "/settings",
      },
    ],
  },
];
