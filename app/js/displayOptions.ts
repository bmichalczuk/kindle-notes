import {createDomElement, withClearDomNodeBefore, renderList} from "./helpers";
import {getDomNode} from "./domNodes";
import { optionsNodeClass, selectionNodeClass, btnNodeClass, downloadBtnClass } from "./consts";



const createOptions = (items: NodeListOf<Element>) => {
    const frag = document.createDocumentFragment();
    const options = getDomNode(`.${optionsNodeClass}`);
    const selectionContainer = createDomElement({element: "ul", attributes: {class: selectionNodeClass}});
    
    const btn = createDomElement({
        element: "button",
        attributes: {
            title: "Download selected items",
            class: `${btnNodeClass} ${downloadBtnClass}`
        },
        textContent: "Download"
    });

    renderList(selectionContainer)(items);

    frag.appendChild(selectionContainer);
    frag.appendChild(btn);
    
    options.appendChild(frag);
};



export default withClearDomNodeBefore(getDomNode(`.${optionsNodeClass}`))(createOptions);

/*
    <div class="options">
        <ul class="selection"></ul>
        <button title="Download selected items" class="button button--download">Download</button>
    </div>
*/