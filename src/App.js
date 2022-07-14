import './App.css';
import {DynamicData} from "./components/dynamic-data";
import {useRecoilState} from "recoil";
import {isLoading} from "./state/atom";

function App() {
  const [loading,] = useRecoilState(isLoading);
  return (
    <div className="App">
      <DynamicData loading={loading} />
    </div>
  );
}

export default App;
