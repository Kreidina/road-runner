import { Outlet } from "react-router-dom";
import { Location } from "./helpers/func";

function App() {
  const location = Location();

  return (
    <div className={location === "/road-runner/" ? "homeContainer " : ""}>
      <Outlet />
    </div>
  );
}

export default App;
