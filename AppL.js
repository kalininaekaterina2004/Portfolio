import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MyLanguags from './screens/myLanguage';

const langs = [
    { id: '1', lang: 'JavaScript', logo: require('./assets/js.png'), experience: '2 года' },
    { id: '2', lang: 'Java', logo: require('./assets/java.png'), experience: '1 год' },
    { id: '3', lang: 'C#', logo: require('./assets/c#.png'), experience: '1 год' },
    { id: '4', lang: 'HTML', logo: require('./assets/html.png'), experience: '2 года' },
    { id: '5', lang: 'CSS', logo: require('./assets/css.png'), experience: '2 года' },
  ];
function AppL () {
    return (
        <View style={styles.сontainer}>
            <FlatList
                data={langs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MyLanguags logo={item.logo} lang={item.lang} experience={item.experience} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    сontainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 20,
    },
});

export default AppL;