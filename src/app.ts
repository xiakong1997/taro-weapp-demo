import { Component } from 'react'
import './app.css'
import { name } from './api/index'

class App extends Component {

  componentDidMount () {
    console.log(this.props.children)
    console.log(name)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
