import {result} from "./domNodes";
import {renderList, withClearDomNodeBefore} from "./helpers";

const displayResult = renderList(result);

const withClearResultBefore = withClearDomNodeBefore(result);

export default withClearResultBefore(displayResult);