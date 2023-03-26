import browser from 'webextension-polyfill';
import { SendMessageWithValue } from './types';

console.log('nyaa');

browser.runtime.onMessage.addListener((request: SendMessageWithValue<string>) => {
  if(request.action === 'send_cs22') {
    const textarea = document.querySelector<HTMLTextAreaElement>('form textarea');
    if (textarea !== null) {
      textarea.value = `${request.value}\n\n\naaaa`;
    }
  }
});
