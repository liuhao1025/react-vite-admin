
import { MenuView, routes } from '/@/routes/index'
import styles from "./SiderMenu.module.css";

export default function SiderMenu() {
  return (
    <div className={styles.siderMenu}>
      <MenuView routes={routes}></MenuView>
    </div>
  );
}
