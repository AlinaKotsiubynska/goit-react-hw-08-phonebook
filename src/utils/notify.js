import toast from "react-hot-toast";

const options = {
  duration: 3000,
  position: "top-right",
};

export const notify = {
  error(contactName) {
    toast.error(`${contactName} is already in contacts`, options);
  },

  added(contactName) {
    toast.success(
      `${contactName} has been  successfully added to the contact list`,
      options
    );
  },

  removed(contactName) {
    toast.success(
      `${contactName} has been successfully removed from the contact list`,
      options
    );
  },
};
