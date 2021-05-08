import icon from "../img/txtIcon.svg";

const createDownloadLink = ({title, entries}) => {
    const content = entries.join();
    const text = new Blob([content], { type: 'text/plain' });
    
    const a = document.createElement("a");
    const img = document.createElement("img");

    if (window.webkitURL != null) {
        a.href = window.webkitURL.createObjectURL(text);
    } else {
        a.href = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
    }
    
    a.download = title;
    a.textContent = title;
    a.classList.add("download");
    a.title = "Click to download file";
    img.classList.add("download__icon");
    img.src = icon;
    img.alt = "File icon";
    a.prepend(img);
    return a;
};

export default createDownloadLink;