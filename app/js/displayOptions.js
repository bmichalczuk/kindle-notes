import {renderList, withClearDomNodeBefore} from "./helpers";
import {selection} from "./domNodes";

const displaySelectionItems = renderList(selection);

const withClearSelectionBefore = withClearDomNodeBefore(selection);

export default withClearSelectionBefore(displaySelectionItems);