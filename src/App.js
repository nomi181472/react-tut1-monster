
import './App.css';
import { Component } from 'react/cjs/react.development';
import { CardList } from './components/card-list-components/card-list-component';
import { SearchBox } from './components/search-box-component/search-box-component';
class App extends Component{
  constructor(){
    super()
    this.state={
      monsters:[
       
      ],
      SearchField:""
    }
    
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  handleChange=(e)=>{
      this.setState({SearchField:e.target.value})
  }
  render(){
    const {monsters,SearchField}=this.state
    const filteredMonsters=monsters.filter(monster=>
       monster.name.toLowerCase().includes(SearchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
      <SearchBox placeholder="Search Monster" handleChange={this.handleChange} />
       <CardList monsters={filteredMonsters}/>
      
      </div>
    );
  }
}



export default App;
