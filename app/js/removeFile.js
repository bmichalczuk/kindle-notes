import {getDomNode} from "./domNodes";
import {setEntries} from "./entries";
import {removeSuccesUpload, eventGuard, clearDomNode} from "./helpers";
import { selectionNodeClass, resultNodeClass, fileInptClass } from "./consts";

const removeFile = () => {
    const options = getDomNode(selectionNodeClass);
    const result = getDomNode(resultNodeClass);
    const fileInpt = getDomNode(fileInptClass);

    fileInpt.value = null;
    setEntries(null);
    clearDomNode(result);
    clearDomNode(options);
    removeSuccesUpload();
};

export default eventGuard(removeFile);