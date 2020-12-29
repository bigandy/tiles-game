import { useMemo } from "react";

import "./App.scss";

import Cells from "./components/Cells";

const App = () => {
  const columns = useMemo(() => 3, []);
  const rows = useMemo(() => 3, []);
  return (
    <div className="App">
      <h1>Grid Game!</h1>

      <div className="wrapper">
        <h1>Grid</h1>

        <div className="grid" style={{ "--columns": columns, "--rows": rows }}>
          <Cells rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default App;
