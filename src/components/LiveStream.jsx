import React from 'react';
import Webcam from 'react-webcam';
import { Paper, Text, Group } from '@mantine/core';

function LiveStream({ isLive, selectedPlatforms }) {
  return (
    <Paper shadow="xs" p="md">
      {isLive ? (
        <>
          <Webcam
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "user"
            }}
          />
          <Group position="center" mt="md">
            <Text size="xl" weight={700} color="red">LIVE</Text>
            <Text>Streaming to: {selectedPlatforms.join(', ')}</Text>
          </Group>
        </>
      ) : (
        <Text align="center" size="xl">Start a live stream to begin</Text>
      )}
    </Paper>
  );
}

export default LiveStream;