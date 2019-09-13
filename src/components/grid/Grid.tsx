import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";
import RGL, {
  Responsive as ResponsiveGridLayout,
  WidthProvider,
  Layout
} from "react-grid-layout";
import { GridItem, GRID_ITEM_TYPE } from "../types";
import { ImageComponent } from "../index";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export const ReactGridLayout = WidthProvider(RGL);

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
  layouts?: Layout[];
  items?: GridItem[];
  onLayoutChange?: (layout: Layout[]) => void;
}

type Props = OwnProps;

export class Grid extends React.Component<Props> {
  public renderItem = (item: GridItem) => {
    switch (item.type) {
      case GRID_ITEM_TYPE.Image:
        return <ImageComponent {...item.props} />;
      case GRID_ITEM_TYPE.Text:
        return <span>lsdflgkjslk</span>;
      default:
        return <div>unsuported type</div>;
    }
  };

  public render(): JSX.Element {
    const { layouts = undefined, items = [], onLayoutChange } = this.props;
    console.log("zet", items);
    const fatalLayout = items.map((item, index) => ({
      static: false,
      x: index * 2,
      y: index * 2,
      h: 2,
      w: 2,
      i: item.id
    }));
    return (
      <div>
        <ReactGridLayout
          layout={layouts || fatalLayout}
          onLayoutChange={onLayoutChange}
          rowHeight={40}
        >
          {items.map(item => (
            <div key={item.id}>{this.renderItem(item)}</div>
          ))}
        </ReactGridLayout>
      </div>
    );
  }
}

const styles: Style = (): Record<ClassNames, CSSProperties> => ({
  container: {}
});

export default withStyles(styles)(Grid);
