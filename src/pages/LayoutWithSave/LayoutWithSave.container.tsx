import { connect } from "react-redux";
import { Dispatch } from "redux";

import { default as LayoutWithSave } from "./LayoutWithSave";

import { getLayoutSave } from "../../redux/layout/layout.selector";
import { saveLayout } from "../../redux/layout/layout.actions";
import { Layout } from "react-grid-layout";
import { State } from "../../redux/types";

const mapStateToProps = (state: State) => ({
  layouts: getLayoutSave(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  saveLayout: (layout: Layout[]) => dispatch(saveLayout(layout))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutWithSave);
