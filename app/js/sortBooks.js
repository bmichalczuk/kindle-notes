import {getBookTitle, getAuthor} from "./helpers";


const getBook = (books, entry) => {
    const title = getBookTitle(entry);
    const author = getAuthor(entry);

    if(!books[title]) { 
        books[title] = {};
        books[title].entries = [];
    }
    books[title].title = title;
    books[title].entries.push(entry.substring(entry.indexOf(")") + 1 ));
    books[title].author = author;
    return books;
};

const sortBooks = (entries) => entries.reduce(getBook, {});

export default sortBooks;

   