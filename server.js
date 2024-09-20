const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Allow cross-origin requests for frontend

// Endpoint to expand the short URL
app.post('/expand', async (req, res) => {
    const { shortUrl } = req.body;

    try {
        // Follow the redirects to expand the URL
        const response = await axios.get(shortUrl, {
            maxRedirects: 5, // Maximum number of redirects to follow
            validateStatus: function (status) {
                return status >= 200 && status < 400; // Follow up to 3xx statuses
            }
        });

        const expandedUrl = response.request.res.responseUrl;

        res.json({ expandedUrl });
    } catch (error) {
        console.error('Error expanding URL:', error.message);
        res.status(400).json({ message: 'Unable to expand the URL.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
