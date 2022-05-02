import React from 'react'
import {useSelector} from "react-redux";
import { Switch, Route } from 'react-router-dom'

const Routing = ({ routes }) => {
    const { access } = useSelector(state => state.accessReducer)

    return (
       <Switch>
          {
              routes.map(item =>
                  item.role.indexOf(access) !== -1 &&
                  <Route
                     key={new Date().getTime()} {...item}
                  />
              )
          }
      </Switch>
    );
};

export default Routing;
