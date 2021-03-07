// import logo from './logo.svg';
// import './App.css';
import { VueWrapper, VueInReact } from 'vuera'
import ReactDemo from './components/ReactDemo'
import VueDemo from './components/VueDemo.vue'
import IViewDemo from './components/IViewDemo.vue'

import 'view-design/dist/styles/iview.css';

function App() {

  const Component = VueInReact(IViewDemo)

  return (
    <div className="App">
      <ReactDemo />

      {/* 第一种方式 */}
      <VueWrapper
        component={VueDemo}
      // message='Hello from Vue!'
      />

      {/* 第二种方式 */}
      <Component message='Hello from Vue!' />
      {/* <VueWrapper
        component={IViewDemo}
      /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
