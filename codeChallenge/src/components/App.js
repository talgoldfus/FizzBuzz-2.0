import React, { Component } from 'react'
import SmartTopicsContainer from '../containers/TopicsContainer'
import '../index.css'
import SigninHeader from '../components/SigninHeader'



class App extends Component {
  render() {
    return (
      <div className="center">
          <SigninHeader />
      </div>
    )
  }

}


export default App
