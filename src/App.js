import React , {Component}  from 'react';
import CardList from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField : '',
      title:''
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()
    ).then(users => this.setState({
      monsters : users
    })) 
    
  }

  handleChange = e =>{
    this.setState({searchField : e.target.value, title: e.target.value}, () => console.log(this.state));
  }

  render (){ 
    const {monsters , searchField, title} = this.state;
    // const filterdMonsters = monsters.filter(monster =>
    //     monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder='Search Cats'
          handleChange={this.handleChange}
        />
        <CardList monsters={monsters}/>          
      </div>
    );  
  }
}

export default App;
