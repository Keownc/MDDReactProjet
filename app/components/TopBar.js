/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

var MenuBarIcon = require('./MenuBarIcon');
var Friends = require('./Friends');
var MyAccount = require('./MyAccount');

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
            <MenuBarIcon name="MenuBarIcon" navigator= {this.props.navigator} />
            <Friends name="Friends" navigator= {this.props.navigator} />
            <MyAccount name="MyAccount" navigator= {this.props.navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#3D8491',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

});

module.exports = TopBar;
