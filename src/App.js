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
import { ParentRefComp } from './Forwarding-Refs/ParentRefComp';
import Portals from './Portals/Portals'
import Hero from './ErrorBoundary/Hero';
import ErrorBoundry from './ErrorBoundary/ErrorBoundry';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import ClickCounterRP from './RenderProps/ClickCounterRP';
import HoverCounterRP from './RenderProps/HoverCounterRP';
import CounterRP from './RenderProps/CounterRP';
import ComponentA from './Context/ComponentA';
import {UserProvider} from './Context/context'

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
      {/* <Refs/> */}
      {/* <ParentRefComp/> */}
      {/* <Portals/> */}
      {/* <ErrorBoundry >*/}
      {/* <Hero hname="sanket"/> */}
      {/* </ErrorBoundry>
      <ErrorBoundry>
      <Hero hname="Mangesh"/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Hero hname="Zende"/>
      </ErrorBoundry> */}

      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <Counter /> */}

      {/* <CounterRP render={(count , incCount) => <ClickCounterRP count={count} incCount={incCount} />} />
      <CounterRP render={(count , incCount) => <HoverCounterRP count={count} incCount={incCount} />} /> */}
      <UserProvider value="sanket">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App
