import { toast } from 'react-toastify';

export const titleize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const copyText = (text, notification = 'Copied!') => {
  navigator.clipboard.writeText(text);
  toast(notification, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light'
  });
};
