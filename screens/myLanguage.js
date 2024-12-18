import React from 'react';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';

const MyLanguages = ({ lang, logo, experience }) => {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textContainer}>
        <Text style={styles.text}>{lang}</Text>
        <Text style={styles.experience}>Опыт: {experience}</Text>
      </View>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 35,
    },
    logo: {
      width: 150,
      height: 150,
      marginRight: 20,
    },
    text: {
      fontSize: 28,
    },
    experience: {
      fontSize: 14,
      color: '#666',
    },
  });



export default MyLanguages;
