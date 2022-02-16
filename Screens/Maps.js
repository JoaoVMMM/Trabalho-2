import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TouchableOpacity, View, Dimensions } from 'react-native';

import MapGet from '../Extra/MapGet';

export default function Maps( { navigation } ) { 
  const addMarker = () => {
     navigation.navigate('AddMarker') 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapGet/>

      <TouchableOpacity
          onPress={ addMarker }
          style={styles.addButton}>
          <Image
            source={{ uri:'https://icon-library.com/images/plus-button-icon/plus-button-icon-0.jpg' }}
            style={styles.buttonFix}
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
    position: 'absolute',
  },
  buttonFix: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});