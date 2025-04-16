import { Fragment } from "react";
import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className="max-w-4xl mx-auto mt-8 px-4">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
