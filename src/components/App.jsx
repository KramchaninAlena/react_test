import { Component } from "react";
// import { Counter } from "./Counter/counter";
import { Header } from "./Header/header";
import { Modal } from "./Modal/Modal";
import ToDoList from './ToDoList/ToDoList'


export class App extends Component {
	state = { 
    isShowModal: false
  }

  toggleModal = () => {
    this.setState((prev) => {
      return{
        isShowModal: !prev.isShowModal,
      }
      
    })
  }
		render() {
		return (
    <>
				<Header toggleModal={this.toggleModal} />
				{/* <Counter /> */}
        <ToDoList/>
        {this.state.isShowModal&&<Modal toggleModal={this.toggleModal}>kjnfg</Modal>}
        
    </>
		)
	}
}


// export const App = () => {
// 	return (
// 		<>
// 			<Header/>
// 			<Counter />
			
// 		</>
// 	)
// }
