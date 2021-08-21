export const isNameUnique = (contacts, contact) => {
  return contacts.every(
    ({ name }) => name.toUpperCase() !== contact.toUpperCase(),
  );
};
