import React from 'react';
import { ART, StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

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
            fontSize: 14
          }}
        >
          {'<Text/>'}
        </Text>
        <ART.Surface height={50} width={100}>
          <ART.Text
            font={{
              fontFamily: 'IndieFlower',
              fontSize: 14
            }}
            fill="#000"
          >
            {'<ART.Text/>'}
          </ART.Text>
        </ART.Surface>
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
