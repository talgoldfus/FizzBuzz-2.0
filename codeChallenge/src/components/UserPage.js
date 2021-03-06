import React, { Component } from 'react'
import UserRecentGame from './UserRecentGame'
import UserQuestionRecord from './UserQuestionRecord'
import MainHeader from './MainHeader'

class UserPage extends Component {

  componentWillMount(){
    var userId = this.props.params.id
    this.props.getUserInfo(userId)
  }

render(){


  const userInfo = this.props.userInfo.user_info || {email: "", tagline: "", average_score: "", games: [], questions_right: [], questions_wrong: []}

  const games = []
  for(var game in userInfo.games){
    games.push(<UserRecentGame gameInfo={userInfo.games[game]}/>)
  }

  const rightAnswers = []
  for(let question in userInfo.questions_right){
    rightAnswers.push(<UserQuestionRecord questionInfo={userInfo.questions_right[question]}/>)
  }

  const wrongAnswers = []
  for(let question in userInfo.questions_wrong){
    wrongAnswers.push(<UserQuestionRecord questionInfo={userInfo.questions_wrong[question]}/>)
  }

  return (
      <div>
        <MainHeader/>
        <h1>{userInfo.email}</h1>
        <h2>Average Score: {userInfo.average_score}</h2>

        <br></br><h3>RECENT GAMES </h3><br></br>
          <table className="userTable">
            <thead>
              <th>Date</th>
              <th>Topic</th>
              <th>Score</th>
            </thead>
            <tbody>
              {games}
            </tbody>
          </table>
      </div>
  )
}}

export default UserPage
