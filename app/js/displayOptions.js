import createSelectionItem from "./createSelectionItem";
import displayResult from "./displayResult";
import {selection} from "./domNodes";
import createDomElement from "./helpers";

const displaySelectionItems = (items) => {
    
    const frag = document.createDocumentFragment();
    items.forEach(item => frag.appendChild(item));
    selection.appendChild(frag);

};

export default displaySelectionItems;