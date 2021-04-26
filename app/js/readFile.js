const reader = new FileReader();

const readFile = (file, callback) => {
    reader.onload = (e) => callback(e.target.result);
    reader.readAsText(file);
};

export default readFile;
