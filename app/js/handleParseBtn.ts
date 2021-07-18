import {eventGuard, compose, getSelectionItems} from "./helpers";
import {getEntries} from "./entries";
import displayOptions from "./displayOptions";


const handleParseBtn = (e: Event) => compose(getEntries, getSelectionItems, displayOptions)("");

export default eventGuard(handleParseBtn);