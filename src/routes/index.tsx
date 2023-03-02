import Layout from "/@/layout/Layout";
import Login from "/@/pages/Login";
import Home from "/@/pages/Home";
import User from "/@/pages/User";
import List from "/@/pages/List";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { MenuList, MenuItem } from "@mui/material";

interface RouteMeta {
  title?: string;
  hidden?: boolean;
  auth?: string[]
}

interface RouteOption {
  path: string;
  component: React.FC | Promise<React.FC>,
  meta?: RouteMeta,
  children?: RouteOption[]
}

export const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: "user",
        component: User,
        meta: {
          title: "用户"
        }
      },
      {
        path: "list",
        component: List,
        meta: {
          title: "列表"
        }
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

export function MenuView({ routes }: { routes: RouteOption[] }) {
  const navigate = useNavigate()
  const handleClick = (route: RouteOption) => {
    navigate(route.path)
  }
  const list = routes[0].children?.map(route => {
    return <MenuItem key={route.path} onClick={() => handleClick(route)}>{route.meta?.title}</MenuItem>
  })
  return <MenuList>{list}</MenuList>
}