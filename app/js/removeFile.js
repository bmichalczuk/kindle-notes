import {fileInpt, result} from "./domNodes";
import {setText} from "./state";
import {removeSuccesUpload, eventGuard, clearDomNode} from "./helpers";


const removeFile = () => {
    fileInpt.value = null;
    setText(null);
    clearDomNode(result);
    removeSuccesUpload();
};

export default eventGuard(removeFile);