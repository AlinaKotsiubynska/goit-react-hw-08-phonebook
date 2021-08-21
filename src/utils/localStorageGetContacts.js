export const getLocal = () => {
  return JSON.parse(localStorage.getItem('contacts'));
};
