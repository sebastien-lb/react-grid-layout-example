import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Style } from "jss";
import { CSSProperties } from "@material-ui/styles";

type ClassNames = "container";
interface OwnProps {
  classes: Record<ClassNames, string>;
  url: string;
}

type Props = OwnProps;

export class ImageComponent extends React.Component<Props> {
  public render(): JSX.Element {
    const { classes } = this.props;
    return <div className={classes.container}></div>;
  }
}

const styles: Style = (): Record<
  ClassNames,
  CSSProperties | ((p: Props) => CSSProperties)
> => ({
  container: (props: Props) => ({
    height: "100%",
    background: `url(${props.url})`,
    backgroundSize: "cover"
  })
});

export default withStyles(styles)(ImageComponent);
