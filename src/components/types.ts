export type GridItemType = "Image" | "Text";

export const GRID_ITEM_TYPE = {
  Image: "Image",
  Text: "Text"
} as const;

export interface GridItem {
  type: GridItemType;
  props: any;
  id: string;
}
