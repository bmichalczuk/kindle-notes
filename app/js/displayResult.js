import {result} from "./domNodes";

const displayResult = (links) => {
    const frag = document.createDocumentFragment();
    links.map(link => frag.appendChild(link));
    result.appendChild(frag);
};

export default displayResult;