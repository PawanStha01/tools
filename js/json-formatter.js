function formatJson() {
    const input = document.getElementById('json-input').value;
    try {
        const json = JSON.parse(input);
        document.getElementById('json-output').textContent = 
            JSON.stringify(json, null, 2);
    } catch (e) {
        alert('Invalid JSON: ' + e.message);
    }
}
