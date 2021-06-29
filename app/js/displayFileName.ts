import {fileName} from "./domNodes";

const displayFileName = (name: string): void => {
    fileName.textContent = name;
};

export default displayFileName;