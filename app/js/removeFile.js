import {fileInpt} from "./domNodes";
import {setText} from "./state";
import {removeSuccesUpload, eventGuard} from "./helpers";

const removeFile = () => {
    fileInpt.value = null;
    setText(null);
    removeSuccesUpload();
};

export default eventGuard(removeFile);