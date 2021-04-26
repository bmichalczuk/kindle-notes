import readFile from "./readFile";
import {setText} from "./state";
import {eventGuard} from "./helpers";

const handleFileInput = (e) => {
    readFile(e.target.files[0], setText);
};

export default eventGuard(handleFileInput);