// Prevents WebView crash on focus for specific input types
document.addEventListener("focusin", function(e) {
    if (e.target.tagName === "INPUT" && ["time", "date"].includes(e.target.type)) {
        setTimeout(() => e.target.blur(), 100);
    }
});

// Native prompt fallbacks for dates
function showDatePicker(inputId) {
    const input = document.getElementById(inputId);
    const val = prompt("Enter date (YYYY-MM-DD):", input.value);
    if (val) input.value = val;
}
