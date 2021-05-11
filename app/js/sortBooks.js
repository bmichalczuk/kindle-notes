import {getBookTitle, getAuthor} from "./helpers";

const getBook = (books, entry) => {
    
    const title = getBookTitle(entry);

    if(title.length < 1) {
        return books;
    }
    const newEntry = entry.substring(entry.indexOf(")") + 1 );

    const book = books.find(book => book.title === title);
    
    if(!book) {
        const author = getAuthor(entry);
        return [...books, {title, author, entries: [newEntry]}]
    } 
    
    book.entries = [...book.entries, newEntry];
    
    return books;
};

const sortBooks = (entries) => entries.reduce(getBook, []);

export default sortBooks;

   