import React from "react";
import View from "./components/View";
import Register from "./components/Register";
import Update from "./components/Update";
import Delete from "./components/Delete";
const App = () => {
  return (
    <div>
      <Register/>
      <View />
      <Update />
      <Delete />
    </div>
  );
}
export default App;