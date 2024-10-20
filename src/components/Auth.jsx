import React from 'react';
import { Button, Group, Text } from '@mantine/core';
import { IconBrandYoutube, IconBrandFacebook, IconBrandTiktok, IconBrandInstagram } from '@tabler/icons-react';
import axios from 'axios';

const platforms = [
  { name: 'YouTube', icon: IconBrandYoutube, color: 'red' },
  { name: 'Facebook', icon: IconBrandFacebook, color: 'blue' },
  { name: 'TikTok', icon: IconBrandTiktok, color: 'dark' },
  { name: 'Instagram', icon: IconBrandInstagram, color: 'grape' },
];

function Auth({ onAuth }) {
  const [error, setError] = React.useState(null);

  const handleAuth = async (platform) => {
    try {
      setError(null);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/${platform}`);
      console.log(response.data);
      // Here you would handle the OAuth flow
      onAuth(platform);
    } catch (error) {
      console.error(`Error authenticating with ${platform}:`, error);
      setError(`Failed to authenticate with ${platform}. Please try again.`);
    }
  };

  return (
    <Group direction="column" spacing="sm">
      {platforms.map((platform) => (
        <Button
          key={platform.name}
          leftIcon={<platform.icon size={18} />}
          color={platform.color}
          fullWidth
          onClick={() => handleAuth(platform.name)}
        >
          Connect {platform.name}
        </Button>
      ))}
      {error && <Text color="red">{error}</Text>}
    </Group>
  );
}

export default Auth;