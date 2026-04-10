const ProjectManager = {
    save: function(code) {
        localStorage.setItem('ACCIO_OFFLINE_V3', code);
        this.updateStorageLabel();
    },

    load: function() {
        return localStorage.getItem('ACCIO_OFFLINE_V3') || "";
    },

    updateStorageLabel: function() {
        const size = (JSON.stringify(localStorage).length / 1024).toFixed(2);
        const label = document.getElementById('storage-usage');
        if(label) label.textContent = `Cache: ${size}KB`;
    }
};

// Debounced Auto-Save
let timeout;
document.getElementById('code-editor')?.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => ProjectManager.save(e.target.value), 500);
});
