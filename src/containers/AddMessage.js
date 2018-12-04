import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddMessageComponent from '../components/AddMessage'
import { addMessage, addUser } from '../actions'
import usernameGenerator from '../helpers/userName'

class AddMessageContainer extends Component {

  state = {
    name: usernameGenerator.first(),
    value: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  handleInputSubmit = ({ key }) => {
    const { name, value } = this.state
    const { addMessage, addUser } = this.props
    if(key === 'Enter' && value) {
      addMessage(value, name)
      addUser(name)
      this.setState({
        name: usernameGenerator.first(),
        value: ''
      })
    }
  }

  render() {
    const { value } = this.state
    return (
      <AddMessageComponent
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        value={value}
      />
   )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addMessage,
    addUser
  },
  dispatch
  )

export const AddMessage = connect(null, mapDispatchToProps)(AddMessageContainer)