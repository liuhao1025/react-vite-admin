import Layout from "/@/layout/Layout";
import Login from "/@/pages/Login";
import Home from "/@/pages/Home";
import User from "/@/pages/User";
import List from "/@/pages/List";
import { Routes, Route } from "react-router-dom";
import { ReactNode } from "react";

export const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "user",
        component: User,
      },
      {
        path: "list",
        component: List,
      },
    ],
  },
  {
    path: "login",
    component: Login,
    meta: {
      hidden: true,
    },
  },
];


export function getRouteList(data: any): ReactNode {
  const list = data.map((route: any) => {
    const Component = route.component;
    const children = route.children ? getRouteList(route.children) : null;
    return <Route key={route.path} path={route.path} element={< Component />}> {children} </Route>
  })

  return list;
}


export function RouteView() {
  return (<Routes>{getRouteList(routes)}</Routes>)
}