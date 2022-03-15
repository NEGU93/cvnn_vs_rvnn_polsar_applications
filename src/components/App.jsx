import { useSelector } from "react-redux";
import { getLink } from "../redux/slices/imagesSlice";
import "../styles/App.scss";
import SelectContainer from "./SelectContainer";

function App() {
  const imgLink = getLink(useSelector((state) => state.imagesReducer));

  return (
    <div className="App">
      <div className="titleContainer">
        <h1>Title</h1>
      </div>

      <SelectContainer></SelectContainer>

      <div className="imageContainer">
        <p>Image path</p>
        <p>{imgLink}</p>
      </div>
    </div>
  );
}

export default App;
