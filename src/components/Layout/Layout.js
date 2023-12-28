import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return <main className="App">{children}</main>;
};

export default Layout;
