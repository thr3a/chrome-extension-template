import browser from 'webextension-polyfill';
import type { SendMessageWithValue } from './types';

console.log('content script');

browser.runtime.onMessage.addListener(async (msg, sender): Promise<void> => {
  const request = msg as SendMessageWithValue<string>;
  console.log('action', request.action, 'value', request.value);
});
