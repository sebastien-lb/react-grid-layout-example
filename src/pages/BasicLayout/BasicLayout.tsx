import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
}

type Props = OwnProps;

export class BasicLayout extends React.Component<Props> {
  public render(): JSX.Element {
    return <div></div>;
  }
}

const styles: Style = (): Record<ClassNames, CSSProperties> => ({
  container: {}
});

export default withStyles(styles)(BasicLayout);
