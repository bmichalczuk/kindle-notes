import bookIcon from "../img/book.svg";
import {createDomElement} from "./helpers";

const createSelectionItem = ({title, author}) => {
    const li = createDomElement({
        element: "li",
        attributes: {
            class: "selection__item"
        }
    })

    const input = createDomElement({
        element: "input",
        attributes: {
            id: `${title + author}`,
            tyoe: "checkbox",
            class: "selection__input",
            checked: "false",
            title: `Add ${title}`
        }
    })

    const label = createDomElement({
        element: "label",
        attributes: {
            class: "selection__label",
            for: `${title + author}`
        },
        textContent: title

    })

    const author = createDomElement({
        element: "span",
        attributes: {
            class: "selection__author"
        },
        textContent: author
    });

    const icon = createDomElement({
        element: "icon",
        attributes: {
            class: "selection__icon",
            src: bookIcon,
            alt: "book icon"
        }
    });

    li.appendChild(icon);
    li.appendChild(input);
    label.appendChild(author);
    li.appendChild(label);
    
};

/*
<li class="selection__item">
    <input id="book4" type="checkbox" class="selection__input" checked title="Option 1" />
    <label for="book4" class="selection__label">Books3<span class="selection__author">asdasd fsd 213123</span></label> 
</li>

                    */