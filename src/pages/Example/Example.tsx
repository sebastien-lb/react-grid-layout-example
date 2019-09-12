import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export const ReactGridLayout = WidthProvider(RGL);

type ClassNames = "itemContainer";
interface OwnProps {
  classes: Record<ClassNames, string>;
}

type Props = OwnProps;

export class Grid extends React.Component<Props> {
  public render(): JSX.Element {
    const { classes } = this.props;
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <div>
        <ReactGridLayout layout={layout} rowHeight={40}>
          <div key="a" className={classes.itemContainer}>
            a
          </div>
          <div key="b" className={classes.itemContainer}>
            b
          </div>
          <div key="c" className={classes.itemContainer}>
            c
          </div>
        </ReactGridLayout>
      </div>
    );
  }
}

const styles: Style = (): Record<ClassNames, CSSProperties> => ({
  itemContainer: {
    background: "grey"
  }
});

export default withStyles(styles)(Grid);
