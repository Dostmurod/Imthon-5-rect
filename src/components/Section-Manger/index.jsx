import React from "react";
import "./main.scss";
import TabMenu from "../tabMenu/index"
import Box from "../../componentss/box"
const index = () => {
  const [value, setValue] = React.useState("Dostmurod");
  const [enterValue, setEnterValue] = React.useState('')


  return (
    <div className="container">
     <div className="containers d-flex">
     <div className="block1"> <Box /></div>
      <div className="block2">
        <TabMenu/>
      </div>
     </div>
    </div>
  );
};

export default index;
