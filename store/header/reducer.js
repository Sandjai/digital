import { menuItems } from "../../constants/fixtures";
import { HEADER_ACTIONS } from "../header/actions";
const initialState = {
  // entities: {},
  // ids: [],
  menuItems,
  activeMenuItem: "HOME",
  isVisible: 0,
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEADER_ACTIONS.setActiveItem: {
      return {
        ...state,
        activeMenuItem: action.payload || 0,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
