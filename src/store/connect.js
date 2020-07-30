import React from "react";
import { StateContext } from "./provider";

const connect = selectState => Component => {
    class Connect extends React.Component {
      
      render() {
        const rootState = this.context.getState();
        const slice = selectState(rootState);

        return <Component {...slice} />;
      }
    }
    Connect.contextType = StateContext;
    return Connect;
  };

export default connect;
