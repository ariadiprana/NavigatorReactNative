import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'


class PageOne extends React.Component {
  render(){
    return (
      <View style={{padding:60}}>
        <Text>Greetings From Page 1!</Text>
        <TouchableOpacity>
          <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'black'}}>
            <Text>Go to page 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PageOne
