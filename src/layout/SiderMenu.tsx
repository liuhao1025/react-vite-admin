import { Menu, MenuList, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SiderMenu.module.css";

const Routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "User",
    path: "/user",
  },
  {
    name: "List",
    path: "/list",
  },
];
export default function SiderMenu() {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route.path);
  };
  const list = Routes.map((item) => (
    <MenuItem key={item.path} onClick={() => handleClick(item)}>
      {item.name}
    </MenuItem>
  ));
  return (
    <div className={styles.siderMenu}>
      <MenuList>{list}</MenuList>
    </div>
  );
}
