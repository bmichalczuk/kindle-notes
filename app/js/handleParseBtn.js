import {eventGuard, compose, getDownloadLinks} from "./helpers";
import {getEntries} from "./entries";
import displayResult from "./displayResult";

const handleParseBtn = (e) => compose(getEntries, getDownloadLinks, displayResult)("");

export default eventGuard(handleParseBtn);