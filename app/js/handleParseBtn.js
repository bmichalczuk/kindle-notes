import parseFile from "./parseFile";
import {eventGuard} from "./helpers";
import {getText} from "./state";

const handleParseBtn = (e) => {
    const text = getText();

    const books = parseFile(text);

    console.log(books);
};

export default eventGuard(handleParseBtn);