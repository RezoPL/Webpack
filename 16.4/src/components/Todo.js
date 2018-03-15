import React from 'react';
import style from './TodoList.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <li className={style.liStyle} key={item.id}>
                {item.text}
                <button className={style.btnDelete} onClick={() => this.props.removeItem(item.id)}>X</button>
            </li>
        );
    }
}

export default Todo;