import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'; 
// import image  from "images/nathan-dumlao-510450-unsplash.jpg"
  class App extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = { items: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
     
      
      render() {
        return (
        
            
              <div>
           
              <ul>
            {this.state.items.map(item => (
              <li >{item.text}</li>
            ))}
          </ul>
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>
                Add 
              </button>
            </form>
          </div>
        
        );
      }
    
    
      handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(x) {
        x.preventDefault();
       
        const newItem = {
          text: this.state.text,
          
        };
        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
        
        }));
      }
    } 
    
    
    // class TodoList extends Component {
    //   render() {
    //     return (
    //       <div>
    //        <h1>Hello world</h1>
    //         </div>
    //     );
    //   }
    // }
    // const listItem= this.setState({counter:this.state.counter+1})
    export default App;
    