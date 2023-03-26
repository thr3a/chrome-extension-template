import browser from 'webextension-polyfill';
import { MantineProvider, Button } from '@mantine/core';

export type SendMessageWithValue<T> = {
  action: string;
  value: T;
};

const sendPrompt = async (prompt: string): Promise<void> => {
  const [currentTab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (!currentTab || !currentTab.id) {
    console.error('Could not find current tab');
    return;
  }

  const message: SendMessageWithValue<string> = {
    action: 'send_cs',
    value: prompt,
  };
  await browser.tabs.sendMessage(currentTab.id, message);
};

export const Popup = () => {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Button>
        Settings
      </Button>
    </MantineProvider>
  );
};

// const handleClick = async (): Promise<void> => {
//   await browser.tabs.create({ url: 'https://example.com/' });
// };
