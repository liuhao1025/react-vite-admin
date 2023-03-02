import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className={styles.layout} style={{ height: "100vh" }}>
      <div className={styles.header}>
        <Topbar />
      </div>
      <div className={styles.layout} style={{ flex: 1, flexDirection: "row" }}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
