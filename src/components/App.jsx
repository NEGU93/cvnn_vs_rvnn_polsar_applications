import "../styles/App.scss";
import HtmlImgComponent from "./HtmlImgContainer";
import PngImgContainer from "./PngImgContainer";
import SelectContainer from "./SelectContainer";

function App() {
  return (
    <div className="App">
      <div className="titleContainer">
        <h1>Title</h1>
      </div>

      <SelectContainer></SelectContainer>

      <PngImgContainer></PngImgContainer>

      <HtmlImgComponent></HtmlImgComponent>
    </div>
  );
}

export default App;
