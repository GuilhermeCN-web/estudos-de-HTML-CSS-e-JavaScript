    const el = document.querySelector("p");
    
    function toggleBold() {
        el.classList.toggle("bold");
    }

    function toggleItalic() {
        el.classList.toggle("italic");
    }

    function toggleUnderLine() {
        el.classList.toggle("underline");
    }

    function toggleMonospace() {
        el.classList.toggle("mono");
        el.classList.toggle("grey-text");
    }

    function removeFormat() {
        el.classList.remove("bold", "italic", "underline", "center-text", "grey-text", "mono");
    }