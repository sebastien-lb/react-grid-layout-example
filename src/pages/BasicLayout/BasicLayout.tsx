import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";
import { GridItem } from "../../components/types";
import { Grid } from "../../components";

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
  items: GridItem[];
}

type Props = OwnProps;

export class BasicLayout extends React.Component<Props> {
  public render(): JSX.Element {
    const { items = [] } = this.props;
    return (
      <div>
        <Grid items={items} />
      </div>
    );
  }
}

const styles: Style = (): Record<ClassNames, CSSProperties> => ({
  container: {}
});

export default withStyles(styles)(BasicLayout);
