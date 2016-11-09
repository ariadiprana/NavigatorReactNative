import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


class PageTwo extends React.Component {
  render(){
    return (
      <View style={{padding:60}}>
        <Text>Greetings from page 2</Text>
        <TouchableOpacity>
          <View>
            <Text>Go to page 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PageTwo
