import React, { useContext } from "react";
import ThemeContext from "../context";

const Layout = ({ children }) => {
  /* Buscando datos del contexto global, por medio del Hook useContext() */
  const context = useContext(ThemeContext);
  const theme = context.theme;

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      {children}
    </div>
  );
};

export default Layout;