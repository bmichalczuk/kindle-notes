import parseFile from "./parseFile";
import {eventGuard} from "./helpers";
import {getText} from "./state";
import displayResult from "./displayResult";
import createDownloadLink from "./createDownloadLink";

const handleParseBtn = (e) => {
    const text = getText();

    const books = parseFile(text);
    
    const links = Object.values(books).map(book => createDownloadLink(book));
     displayResult(links);
};

export default eventGuard(handleParseBtn);