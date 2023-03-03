export const HEADER_ACTIONS = {
  setActiveItem: "header/setActiveItem",
};

export const setActiveItem = (item) => {
  return {
    type: HEADER_ACTIONS.setActiveItem,
    payload: item,
  };
};
