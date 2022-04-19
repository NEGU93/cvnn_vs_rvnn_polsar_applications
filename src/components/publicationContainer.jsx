import { useSelector } from "react-redux";
import { getInputImgLink } from "../redux/slices/imagesSlice";
import { PUBLICATION_FILES } from "../constants/constants";

const PublicationComponent = (props) => {
    const dataset = getInputImgLink(useSelector((state) => state.imagesReducer)).split("/")[0];
    console.log(dataset);
    console.log(Boolean(dataset));
    return Boolean(dataset) ? ( <div>
        <h2>{PUBLICATION_FILES[dataset]["year"]}</h2>
        <h2>{PUBLICATION_FILES[dataset]["authors"]}</h2>
        <h2>{PUBLICATION_FILES[dataset]["title"]}</h2>
        <h2>{PUBLICATION_FILES[dataset]["published"]}</h2>
    </div>) : ("");
  };
  
  export default PublicationComponent;