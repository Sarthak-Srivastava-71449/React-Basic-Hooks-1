import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import Count from "./UseCount";
import Content from "./UseContent";


function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"yellow":"red",
    color:theme?"red":"yellow",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
        <Content/>
      <Count/>
    </div>
  )
}

export default UseContext;