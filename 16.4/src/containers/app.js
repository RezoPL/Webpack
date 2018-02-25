import React from 'react';
import style from './App.css';
import Title from '../components/title.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title = 'To do list'
                    count = {this.state.data.length}
                />
            </div>
        );
    }
}

export default App;