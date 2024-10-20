import React from 'react';
import { Button, Group } from '@mantine/core';

function PlatformSelector({ platforms, selectedPlatforms, togglePlatform }) {
  return (
    <Group direction="column" spacing="sm">
      {platforms.map((platform) => (
        <Button
          key={platform.name}
          leftIcon={<platform.icon size={18} />}
          variant={selectedPlatforms.includes(platform.name) ? "filled" : "light"}
          color={platform.color}
          fullWidth
          onClick={() => togglePlatform(platform.name)}
        >
          {platform.name}
        </Button>
      ))}
    </Group>
  );
}

export default PlatformSelector;