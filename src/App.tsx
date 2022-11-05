import reactLogo from "./assets/react.svg";
import { AddressCascader } from "react-china-division";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>react-china-division-demo</p>
        <p style={{ marginBottom: 24 }}></p>
        <div>
          <p>仅展示省市：</p>
          <AddressCascader />
        </div>
        <p style={{ marginBottom: 24 }}></p>
        <div>
          <p>全展示：</p>
          <AddressCascader showArea />
        </div>
      </div>
    </div>
  );
}

export default App;
