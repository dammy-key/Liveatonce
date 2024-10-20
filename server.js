import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/auth/:platform', (req, res) => {
  const { platform } = req.params;
  // Here you would implement the OAuth flow for each platform
  // For now, we'll just return a mock response
  res.json({ 
    message: `Auth endpoint for ${platform}`,
    authUrl: `https://${platform.toLowerCase()}.com/oauth/authorize?client_id=mock_client_id&redirect_uri=http://localhost:3000/callback`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});