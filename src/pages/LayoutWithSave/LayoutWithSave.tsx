import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";
import { GridItem } from "../../components/types";
import { Grid } from "../../components";
import Button from "@material-ui/core/Button";
import { Layout } from "react-grid-layout";

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
  items: GridItem[];
}

interface StateProps {
  layouts: Layout[];
}

interface DispatchProps {
  saveLayout: (layout: Layout[]) => void;
}

interface OwnState {
  layout: Layout[];
}

type Props = OwnProps & StateProps & DispatchProps;

export class LayoutWithSave extends React.Component<Props, OwnState> {
  state = { layout: [] };

  public handleSave = () => {
    const { saveLayout } = this.props;
    saveLayout(this.state.layout);
  };

  public onLayoutChange = (layout: Layout[]) => {
    this.setState({ layout });
  };

  public render(): JSX.Element {
    const { items, layouts } = this.props;
    return (
      <>
        <Button onClick={this.handleSave}>Save layout</Button>
        <Grid
          items={items}
          layouts={layouts}
          onLayoutChange={this.onLayoutChange}
        />
      </>
    );
  }
}

const styles: Style = (): Record<ClassNames, CSSProperties> => ({
  container: {}
});

export default withStyles(styles)(LayoutWithSave);
