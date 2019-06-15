import React,{Component} from 'react';
import Todolist from "./components/todolist"
import Calculator from "./components/calculator"

// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

class App extends Component{
  render(){
    return (
      <div className="App">
        <Todolist></Todolist>
        <Calculator></Calculator>
      </div>
    )
  }
}

export default App;
