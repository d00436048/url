function expandUrl() {
    const shortUrl = document.getElementById("shortUrl").value;
    const resultElement = document.getElementById("result");

    fetch(`http://localhost:3000/expand`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shortUrl })
    })
    .then(response => response.json())
    .then(data => {
        if (data.expandedUrl) {
            resultElement.textContent = `Expanded URL: ${data.expandedUrl}`;
        } else {
            resultElement.textContent = "Invalid URL or error occurred.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultElement.textContent = "Error expanding URL.";
    });
}
