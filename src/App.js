import React from 'react';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import ListItem from './Components/ListItem/ListItem';
import "./App.css";

class App extends React.Component {
  constructor() {

   super();
   this.state = {
    inputValue: "",
    toDoList: [],
  }
}

  onClickBtn = () => {
    const {inputValue, toDoList} = this.state;
    
    this.setState({
      toDoList: [inputValue, ...toDoList],
      inputValue: "",
    });
 }

 onRemove = (toDoName) => {
  const {toDoList} = this.state;

  const toDoIndex = toDoList.findIndex((str) => str === toDoName);
  const newToDoList = [...toDoList.slice(0, toDoIndex), ...toDoList.slice(toDoIndex + 1)];

  this.setState({
    toDoList: newToDoList  
  });
 }

  onChangeInput = (event) => {
      this.setState ({
      inputValue: event.target.value,
    })
  }

  render() {
    const {inputValue, toDoList} = this.state;

    return(
      <div>
        <div>
          <h1>ToDoList</h1>
        </div>
        <div className='control'>
          <Input 
            value={inputValue}
            onChange={this.onChangeInput}
          />
          <Button 
           name="Add new task"
           onClick={this.onClickBtn}/>
        </div>

        <div className='table'>
          {toDoList.map((toDoStr) => {
            return(
              <ListItem
              key={toDoStr}
              toDoName={toDoStr}
              remove={this.onRemove}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
