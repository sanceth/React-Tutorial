import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import EventBinding from './Components/EventBinding';
import ParentComp from './MethodsAsProps/ParentComp';
import CondRendering from './CondRendering';
import ListRendering from './ListRendering';
import ListRender from './ListRender';
import StyleSheet from './StyleSheet';
import FormHandling from './FormHandling';
import MoutingLifeCycleA from './LifeCycle_Methods/MoutingLifeCycleA';
import ParentRegComp from './PureComp/ParentRegComp';
import MemoParentComp from './Memo/MemoParentComp';
import Refs from './Refs/Refs';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Sanket" lname="Zende" ></Greet>
      <Welcome name="PATIL"></Welcome> */}
      {/* <Message></Message> */}
      {/* <Counter/> */}
      {/* <EventBinding/> */}
      {/* <ParentComp /> */}
      {/* <CondRendering /> */}
      {/* <ListRendering/> */}
      {/* <ListRender/> */}
      {/* <StyleSheet/> */}
      {/* <FormHandling/> */}
      {/* <MoutingLifeCycleA/> */}
      {/* <ParentRegComp/> */}
      {/* <MemoParentComp/> */}
      <Refs/>
    </div>
  );
}

export default App
