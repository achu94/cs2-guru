/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
