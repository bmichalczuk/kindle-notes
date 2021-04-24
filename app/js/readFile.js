const reader = new FileReader();

export const readFile = (file, callback) => {
    reader.onload = (e) => callback(e.target.result);
    reader.readAsText(file)
};