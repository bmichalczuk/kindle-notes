import parseFile from "./parseFile";
import {eventGuard, compose, getDownloadLinks} from "./helpers";
import {getText} from "./state";
import displayResult from "./displayResult";

const handleParseBtn = (e) => compose(getText, parseFile, getDownloadLinks, displayResult)("");

export default eventGuard(handleParseBtn);