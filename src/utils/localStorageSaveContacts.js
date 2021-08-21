export const saveLocal = contacts => {
  const prepearedToLocal = JSON.stringify(contacts);
  localStorage.setItem('contacts', prepearedToLocal);
};
