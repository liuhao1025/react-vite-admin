import { Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import { AuthProvider } from "./auth/AuthProvider";
import styles from './App.css';

function Home() {
  return <>Home</>;
}

function User() {
  return <>User</>;
}
function List() {
  return <>List</>;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
