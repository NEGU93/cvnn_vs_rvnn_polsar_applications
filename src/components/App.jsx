import { useSelector } from "react-redux";
import { getLink } from "../redux/slices/imagesSlice";
import "../styles/App.scss";
import SelectModel from "./SelectModel";

function App() {
  const imgLink = getLink(useSelector((state) => state.imagesReducer));

  return (
    <div>
      <h1>Title</h1>

      <SelectModel></SelectModel>
      <div className="image">
        <p>Image path</p>
        <p>{imgLink}</p>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <p>Holis</p>
    //   </header>
    // </div>
  );
}

export default App;
