import React from "react";
import { StateContext } from "../stateContext";

const connect = selectState => Component => {
    class Connect extends React.Component {
      
      render() {
        const rootState = this.context;
        const slice = selectState(rootState);

        return <Component {...slice} />;
      }
    }
    Connect.contextType = StateContext;
    return Connect;
  };

export default connect;
