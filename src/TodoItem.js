import React , {Component} from 'react'

class TodoItem extends Component{
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的参数
  render() {
    const {content} = this.props;
    return (
      <div className="item-do">
        <span>{content}</span>
        <div className="btn-del" onClick={this.handleDelete}></div>
      </div>
    )
  }
  handleDelete() {
    const { deleteItm, index } = this.props;
    deleteItm(index);
  }
}

export default TodoItem