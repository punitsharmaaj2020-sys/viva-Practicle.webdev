import React from "react";
import Child from "./Child";

function Parent() {
  const name = "Punit";

  return (
    <div>
      <h1>Parent</h1>
      <Child username={name} />
    </div>
  );
}

export default Parent;