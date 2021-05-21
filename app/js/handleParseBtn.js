import {eventGuard, compose, getDownloadLinks, getSelectionItems} from "./helpers";
import {getEntries} from "./entries";
import displayResult from "./displayResult";
import displayOptions from "./displayOptions";


const handleParseBtn = (e) => compose(getEntries, getSelectionItems, displayOptions)("");

export default eventGuard(handleParseBtn);