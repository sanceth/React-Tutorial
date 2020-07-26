import React, { useReducer } from 'react';
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
import { UserProvider } from './Context/context'
import HooksCounter from './Hooks/HooksCounter';
import PrevStateHook from './Hooks/PrevStateHook';
import StateHookObj from './Hooks/StateHookObj';
import StateHookArr from './Hooks/StateHookArr';
import UseEffectRender from './Hooks/UseEffectHook/UseEffectRender';
import UseEffectCleanUp from './Hooks/UseEffectHook/UseEffectCleanUp';
import CleanupContainer from './Hooks/UseEffectHook/CleanupContainer';
import FetchDataUseEffect from './Hooks/UseEffectHook/FetchDataUseEffect';
import ComponentX from './Hooks/UseContextHook/ComponentX';
import UseContextHook from './Hooks/UseContextHook/UseContextHook';
import CounterWithReducer from './Hooks/UseReducerHook/CounterWithReducer';
import CounterWithReducerObj from './Hooks/UseReducerHook/CounterWithReducerObj';
import MultipleReducer from './Hooks/UseReducerHook/MultipleReducer';
import ComponentARC from './Hooks/UseReducerHook/ReducerWithContext/ComponentARC';
import ParentContainer from './Hooks/UseCallbackHook/ParentContainer';

export const StudentContext = React.createContext()
export const TeacherContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
    // return newState;
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'res':
            return initialState
    }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
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
      {/* <UserProvider value="sanket">
        <ComponentA />
      </UserProvider> */}

      {/* hooks */}

      {/* <HooksCounter/> */}
      {/* <PrevStateHook/> */}
      {/* <StateHookObj /> */}
      {/* <StateHookArr/> */}
      {/* <UseEffectRender ></UseEffectRender> */}
      {/* <UseEffectCleanUp/> */}
      {/* <CleanupContainer/> */}
      {/* <FetchDataUseEffect/> */}
      {/* <StudentContext.Provider value={"sanket"}>
        <TeacherContext.Provider value={"Jagtap Sir"}>
          <ComponentX />
        </TeacherContext.Provider>
      </StudentContext.Provider> */}
      {/* <UseContextHook/> */}
      {/* <CounterWithReducer /> */}
      {/* <CounterWithReducerObj /> */}
      {/* <MultipleReducer /> */}
      {/* <StudentContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentARC />
      </StudentContext.Provider> */}

      <ParentContainer />
    </div>
  );
}

export default App
