export const selectHeaderModule = (state) => state.header;

export const selectIsVisible = (state) =>
  selectHeaderModule(state)?.activeSection || 0;

export const selectMenuItems = (state) =>
  selectHeaderModule(state)?.menuItems || [{ id: 1, text: "HOME", link: "/" }];

export const selectActiveMenuItem = (state) =>
  selectHeaderModule(state)?.activeMenuItem || 1;
