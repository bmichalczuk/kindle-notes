import icon from "../img/txtIcon.svg";
import {createDomElement} from "./helpers";

const createDownloadLink = ({title, author, entries}: {title: string, author: string, entries: string[]}) => {

    const content = entries.join();
    const text = new Blob([content], { type: 'text/plain' });

    const a = createDomElement({
        element: "a",
        attributes: {
            class: "download",
            download: title,
            title: `Click to download ${title} notes`
        }
    }) as HTMLAnchorElement;

    const img = createDomElement({
            element: "img",
            attributes: {
                class: "download__icon",
                alt: "book icon",
                src: icon
            }}
    );

    const bookTitle = createDomElement({
        element: "div",
        attributes: {
            class: "download__title"
        },
        textContent: title
    });

    const bookAuthor = createDomElement({
        element: "div",
        attributes: {
            class: "download__author",

        },
        textContent: `by ${author}`
    });

    if (window.webkitURL != null) {
        a.href = window.webkitURL.createObjectURL(text);
    } else {
        
        a.href = `data:text/plain;charset=utf-8,${encodeURIComponent(`${text}`)}`;
    }

    
    a.appendChild(img);
    a.appendChild(bookTitle);
    a.appendChild(bookAuthor);
    
    return a;
};

export default createDownloadLink;