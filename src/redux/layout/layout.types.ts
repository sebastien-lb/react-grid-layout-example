import { saveLayout, autoSaveLayout } from "./layout.actions";
import { Layout } from "react-grid-layout";

export interface LayoutState {
  layoutSave?: Layout[];
  layoutAutoSave?: Layout[];
}

export type LayoutAction =
  | ReturnType<typeof saveLayout>
  | ReturnType<typeof autoSaveLayout>;
