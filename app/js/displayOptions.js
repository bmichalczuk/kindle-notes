import {createDomElement, withClearDomNodeBefore, renderList} from "./helpers";
import {options} from "./domNodes";

const createOptions = (items) => {
    const frag = document.createDocumentFragment();

    const selectionContainer = createDomElement({element: "ul", attributes: {class: "selection"}});
    
    const btn = createDomElement({
        element: "button",
        attributes: {
            title: "Download selected items",
            class: "button button--download"
        },
        textContent: "Download"
    });

    renderList(selectionContainer)(items);

    frag.appendChild(selectionContainer);
    frag.appendChild(btn);
    
    options.appendChild(frag);
};

export default withClearDomNodeBefore(options)(createOptions);

/*
    <div class="options">
        <ul class="selection"></ul>
        <button title="Download selected items" class="button button--download">Download</button>
    </div>
*/