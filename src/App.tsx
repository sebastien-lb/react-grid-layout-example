import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

import {
  BasicLayout,
  LayoutWithAutoSave,
  LayoutWithSave,
  Example
} from "./pages";
import { GridItem, GRID_ITEM_TYPE } from "./components/types";

const VIEW = {
  BASIC: "BASIC",
  SAVE: "SAVE",
  AUTOSAVE: "AUTOSAVE",
  EXAMPLE: "EXAMPLE"
};

const items: GridItem[] = [
  {
    type: GRID_ITEM_TYPE.Image,
    id: "a",
    props: {
      url: "https://voyages.michelin.fr/sites/default/files/plages.png"
    }
  },
  {
    type: GRID_ITEM_TYPE.Image,
    id: "b",
    props: {
      url:
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/10/fintech-one.jpg"
    }
  },
  {
    type: GRID_ITEM_TYPE.Image,
    id: "c",
    props: {
      url:
        "https://cdn.images.express.co.uk/img/dynamic/36/590x/pirates-of-the-caribbean-reboot-johnny-depp-1036739.jpg?r=1540551067592"
    }
  },
  {
    type: GRID_ITEM_TYPE.Image,
    id: "d",
    props: {
      url:
        "http://fr.web.img6.acsta.net/videothumbnails/18/04/13/12/03/0899202.jpg"
    }
  },
  {
    type: GRID_ITEM_TYPE.Image,
    id: "e",
    props: {
      url:
        "http://static1.comicvine.com/uploads/original/11112/111129141/5440487-1122329314-52705.png"
    }
  },
  {
    type: GRID_ITEM_TYPE.Text,
    id: "f",
    props: {}
  }
];

class App extends React.Component {
  state = { view: VIEW.BASIC };

  switchView = (view: any) => () => {
    this.setState({ view });
  };

  renderView = () => {
    const { view } = this.state;
    switch (view) {
      case VIEW.BASIC:
        return <BasicLayout items={items} />;
      case VIEW.SAVE:
        return <LayoutWithSave items={items} />;
      case VIEW.AUTOSAVE:
        return <LayoutWithAutoSave items={items} />;
      case VIEW.EXAMPLE:
        return <Example />;
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <Button onClick={this.switchView(VIEW.EXAMPLE)}>Exmaple</Button>
          <Button onClick={this.switchView(VIEW.BASIC)}>BASIC</Button>
          <Button onClick={this.switchView(VIEW.SAVE)}>With Save</Button>
          <Button onClick={this.switchView(VIEW.AUTOSAVE)}>
            With AutoSave
          </Button>
        </div>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
