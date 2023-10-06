import { Fragment } from "react";

import NavBar from "./nav-bar";

function Layout(props){
  return(
    <Fragment>
      <NavBar/>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout;