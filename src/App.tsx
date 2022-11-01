import reactLogo from "./assets/react.svg";
import "./App.css";
import { Cascader, version } from "antd";
import "antd/dist/antd.css";

import provinces from "china-division/dist/provinces.json";
import cities from "china-division/dist/cities.json";
import areas from "china-division/dist/areas.json";

type ChidDivisionType = {
  code?: string;
  name?: string;
  provinceCode?: string;
  cityCode?: string;
  label?: string;
  value?: string;
  children?: Array<ChidDivisionType>;
};
// TODO: 如果需要区级，可以打开注释
// areas.forEach((area: ChidDivisionType) => {
//   const matchCity: ChidDivisionType = cities.filter(
//     (city) => city.code === area.cityCode
//   )[0];
//   if (matchCity) {
//     matchCity.children = matchCity.children || [];
//     matchCity.children.push({
//       label: area.name,
//       value: area.code,
//     });
//   }
// });

cities.forEach((city: ChidDivisionType) => {
  const matchProvince: ChidDivisionType = provinces.filter(
    (province) => province.code === city.provinceCode
  )[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children,
    });
  }
});

const options = provinces.map((province: ChidDivisionType) => ({
  label: province.name,
  value: province.code,
  children: province.children,
}));

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
        <p style={{ marginBottom: 24 }}>
          Current antd version: {version} <br />
        </p>
        <Cascader
          options={options}
          showSearch
          placeholder="请选择地址"
          style={{ width: 400 }}
        />
      </div>
    </div>
  );
}

export default App;
