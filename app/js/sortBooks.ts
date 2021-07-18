import {getBookTitle, getAuthor} from "./helpers";
import {authorEndSign} from "./consts";
import {Book} from "./types";

const getBook = (books: Book[] | [] , entry: string) => {
    
    const title = getBookTitle(entry);

    if(title.length < 1) {
        return books;
    }
    
    const newEntry = entry.substring(entry.indexOf(authorEndSign) + 1 );

    const book = books.find((book: Book) => book.title === title);
    
    if(!book) {
        const author = getAuthor(entry);
        return [...books, {title, author, entries: [newEntry]}]
    } 
    
    book.entries = [...book.entries, newEntry];
    
    return books;
};

const sortBooks = (entries: string[]) => entries.reduce(getBook, []);

export default sortBooks;

   