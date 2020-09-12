import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

// 定义一个React组件
class Todolist extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            deleteItm={this.handleDelete} 
            key={index} 
            index={index} 
            content={item}
          />
        )
      })
    )
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数

  render() {
    // jsx 语法
    return (
      <Fragment>
        <header>
          <section>
            <label className="title">ToDoList</label>
            <div className="todo-input">
              <input 
                placeholder="添加ToDo"
                value={this.state.inputValue} 
                onChange={this.handleInputChange}/>
              <button 
                className='btn-do'
                onClick={this.handleBtnClick}>
                  添加
              </button>
            </div>
          </section>
        </header>
        <section>
          <h2>正在进行<span>{this.state.list.length}</span></h2>
          <ul>
            {this.getTodoItems()}
          </ul>
        </section>
      </Fragment>
    )
  }
  handleBtnClick() {
    if (this.state.inputValue === '') return alert('请输入');
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }
}

export default Todolist;
