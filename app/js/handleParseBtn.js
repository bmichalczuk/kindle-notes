import {eventGuard, compose, getDownloadLinks, getSelectionItems} from "./helpers";
import {getEntries} from "./entries";
import displayOptions from "./displayOptions";
import createOptions from "./createOptions";


const handleParseBtn = (e) => compose(getEntries, getSelectionItems, displayOptions)("");

export default eventGuard(handleParseBtn);