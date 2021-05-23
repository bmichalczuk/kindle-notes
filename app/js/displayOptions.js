
import {selection} from "./domNodes";

const displaySelectionItems = (items) => {
    
    const frag = document.createDocumentFragment();
    items.forEach(item => frag.appendChild(item));
    selection.appendChild(frag);

};

export default displaySelectionItems;