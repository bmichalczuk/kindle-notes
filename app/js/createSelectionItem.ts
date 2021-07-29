import bookIcon from "../img/book.svg";
import {createDomElement} from "./helpers";
import {Book} from "./types";
import { selectionItemClass, selectionLabelClass, selectionInptClass, selectionIconClass, selectionAuthorClass} from "./consts";


const createSelectionItem = ({title, author}: Book) => {
    const id = `${title.split(" ").join("") + author.split(" ").join("")}`;

    const li = createDomElement({
        element: "li",
        attributes: {
            class: selectionItemClass
        }
    })

    const input = createDomElement({
        element: "input",
        attributes: {
            id,
            type: "checkbox",
            class: selectionInptClass,
            title: `Add ${title}`,
            [`data-author`]: author,
            [`data-title`]: title
        }
    })

    const label = createDomElement({
        element: "label",
        attributes: {
            class: selectionLabelClass,
            for: id
        },
        textContent: title

    })

    const authorName = createDomElement({
        element: "span",
        attributes: {
            class: selectionAuthorClass
        },
        textContent: author
    });

    const icon = createDomElement({
        element: "img",
        attributes: {
            class: selectionIconClass,
            src: bookIcon,
            alt: "book icon"
        }
    });

    label.prepend(icon);

    li.appendChild(input);

    label.appendChild(authorName);
    
    li.appendChild(label);
    
    return li;
};

export default createSelectionItem;

/*
<li class="selection__item">
    <img src="asd" class="selection__icon" alt="book icon" />
    <input id="book4" type="checkbox" class="selection__input" checked title="Option 1" />
    <label for="book4" class="selection__label">Books3<span class="selection__author">asdasd fsd 213123</span></label> 
</li>
*/