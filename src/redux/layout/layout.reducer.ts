import { SAVE_LAYOUT, AUTOSAVE_LAYOUT } from "./layout.constants";

import { LayoutAction, LayoutState } from "./layout.types";

export const reducer = (state: LayoutState = {}, action: LayoutAction) => {
  switch (action.type) {
    case SAVE_LAYOUT:
      return { ...state, layoutSave: action.payload.layout };
    case AUTOSAVE_LAYOUT:
      return { ...state, layoutAutoSave: action.payload.layout };
    default:
      return state;
  }
};
