import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = () => {
    return (
        <View style={styles.container}>
      <Text style={styles.text}>Hi! My name is Katya</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ced1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      frontSize: 30,
      frontWeight: 'bold',
    },
  });

export default AboutMe;