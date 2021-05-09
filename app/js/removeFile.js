import {fileInpt, result} from "./domNodes";
import {setEntries} from "./entries";
import {removeSuccesUpload, eventGuard, clearDomNode} from "./helpers";

const removeFile = () => {
    fileInpt.value = null;
    setEntries(null);
    clearDomNode(result);
    removeSuccesUpload();
};

export default eventGuard(removeFile);