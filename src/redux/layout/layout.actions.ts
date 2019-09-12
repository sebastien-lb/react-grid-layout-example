import { SAVE_LAYOUT, AUTOSAVE_LAYOUT } from "./layout.constants";
import { Layout } from "react-grid-layout";

export const saveLayout = (layout: Layout[]) => ({
  type: SAVE_LAYOUT as typeof SAVE_LAYOUT,
  payload: { layout }
});

export const autoSaveLayout = (layout: Layout[]) => ({
  type: AUTOSAVE_LAYOUT as typeof AUTOSAVE_LAYOUT,
  payload: { layout }
});
