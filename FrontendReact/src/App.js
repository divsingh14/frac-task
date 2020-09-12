import React from 'react';
import ListTodo from './container/ListTodo';
import CreateTodo from './container/CreateTodo';
import EditTodo from './container/EditTodo';
import { Route,Switch } from 'react-router-dom';

const App = ()=>{
  return (
      <div className="container mt-5">
        <Switch>
          <Route path="/" exact component={ListTodo} />
          <Route path="/addtodo" component={CreateTodo} />
          <Route path="/edittodo" component={EditTodo} />
        </Switch>
      </div>
    );
}

export default App;
