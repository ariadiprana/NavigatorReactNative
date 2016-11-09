import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


class PageTwo extends React.Component {
  constructor(props){
    super(props)
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress(){
    this.props.navigator.pop()
  }
  render(){
    return (
      <View style={{padding:60}}>
        <Text>Greetings from page 2</Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'blue'}}>
            <Text>Go to page 1</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PageTwo
