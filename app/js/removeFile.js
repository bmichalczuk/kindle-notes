import {getDomNode} from "./domNodes";
import {setEntries} from "./entries";
import {removeSuccesUpload, eventGuard, clearDomNode} from "./helpers";
import {resultNodeClass, fileInptClass, optionsNodeClass } from "./consts";

const removeFile = () => {
    const fileInpt = getDomNode(fileInptClass);
    fileInpt.value = null;
    setEntries(null);
    clearDomNode(getDomNode(resultNodeClass));
    clearDomNode(getDomNode(optionsNodeClass));
    removeSuccesUpload();
};

export default eventGuard(removeFile);