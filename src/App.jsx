import React, { useState } from 'react';
import { AppShell, Navbar, Header, Footer, Text, MediaQuery, Burger, useMantineTheme, Button, Group } from '@mantine/core';
import LiveStream from './components/LiveStream';
import PlatformSelector from './components/PlatformSelector';
import Auth from './components/Auth';

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [authenticatedPlatforms, setAuthenticatedPlatforms] = useState([]);

  const togglePlatform = (platform) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const startLiveStream = () => {
    if (selectedPlatforms.length > 0) {
      setIsLive(true);
    }
  };

  const stopLiveStream = () => {
    setIsLive(false);
  };

  const handleAuth = (platform) => {
    setAuthenticatedPlatforms(prev => [...prev, platform]);
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Auth onAuth={handleAuth} />
          <PlatformSelector
            platforms={authenticatedPlatforms}
            selectedPlatforms={selectedPlatforms}
            togglePlatform={togglePlatform}
          />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <Group position="apart">
            <Text>D-Live@Once</Text>
            <Button 
              color={isLive ? "red" : "green"} 
              onClick={isLive ? stopLiveStream : startLiveStream}
              disabled={selectedPlatforms.length === 0}
            >
              {isLive ? "Stop Live" : "Go Live"}
            </Button>
          </Group>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>D-Live@Once</Text>
          </div>
        </Header>
      }
    >
      <LiveStream isLive={isLive} selectedPlatforms={selectedPlatforms} />
    </AppShell>
  );
}

export default App;