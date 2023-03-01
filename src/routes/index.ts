export const routes = [
  {
    path: "",
    component: () => import(""),
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "user",
        component: () => import(""),
      },
      {
        path: "list",
        component: () => import(""),
      },
    ],
  },
  {
    path: "*",
    compoennt: () => import(""),
    meta: {
      title: "404",
    },
  },
];
