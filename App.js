import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Svg, Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      IndieFlower: require('./assets/fonts/IndieFlower.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'IndieFlower',
            fontSize: 14,
            height: 50,
            width: 100
          }}
        >
          {'<Text/>'}
        </Text>
        <Svg height={50} width={100}>
          <Svg.Text fontFamily="IndieFlower" fontSize={14}>
            {'<Svg.Text/>'}
          </Svg.Text>
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
