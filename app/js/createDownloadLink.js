const createDownloadLink = (name, content) => {
    const text = new Blob([content], { type: 'text/plain' });
    
    const a = document.createElement("a");
    
    if (window.webkitURL != null) {
        a.href = window.webkitURL.createObjectURL(text);
    } else {
        a.href = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
    }
    
    a.download = name;
    a.textContent = name;
    a.class = "link--download";
    return a;
};

export default createDownloadLink;