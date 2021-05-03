const createDownloadLink = ({title, entries}) => {
    const content = entries.join();
    const text = new Blob([content], { type: 'text/plain' });
    
    const a = document.createElement("a");
    
    if (window.webkitURL != null) {
        a.href = window.webkitURL.createObjectURL(text);
    } else {
        a.href = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
    }
    
    a.download = title;
    a.textContent = title;
    a.class = "result__download";
    return a;
};

export default createDownloadLink;