export const nameChecked = (value) => {
  return {
    type: `CHECKED`,
    payload: value,
  };
};

export const nameUnchecked = (value) => {
  return {
    type: `UNCHECKED`,
    payload: value,
  };
};
