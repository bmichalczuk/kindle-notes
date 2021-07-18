import {extractEntries, compose} from "./helpers";
import sortBooks from "./sortBooks";
import {setEntries} from "./entries";

const parseFile = (textContent: string) => compose(extractEntries, sortBooks, setEntries)(textContent);

export default parseFile;