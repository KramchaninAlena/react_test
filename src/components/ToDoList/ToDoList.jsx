import ToDo from 'components/ToDo/ToDo'
import todo from '../../data/data.json'
import { Component } from 'react'

export default class toDoList extends Component {
  state = { todo }
  handleClickDelete = (id) => {
 this.setState((prev) => ({
     todo: prev.todo.filter( el => {
        console.log(prev)
       return el.id !==id
    })
    
 }))
  }
    render() {
        return (
        <ul  className='list-group'>
        {this.state.todo.map((el) => (
		<ToDo todo={el}	key={el.id} handleClickDelete={this.handleClickDelete}/>
        ))}
        </ul>
        )
      
    
  }
}
