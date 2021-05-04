import {extractEntries, compose} from "./helpers";
import sortBooks from "./sortBooks";

const parseFile = (textContent) => compose(extractEntries, sortBooks)(textContent);

export default parseFile;