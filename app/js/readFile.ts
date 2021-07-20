const reader = new FileReader();

const readFile = (file: File, callback: Function) => {
    reader.onload = (e) => callback(e.target.result);
    reader.readAsText(file);
};

export default readFile;
