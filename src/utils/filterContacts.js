export const filterToDelete = (arr, id) => {
  return arr.filter(contact => id !== contact.id);
};

export const filterToMatch = (arr, name) => {
  return arr.filter(contact => {
    return contact.name.toLowerCase().includes(name.toLowerCase());
  });
};
