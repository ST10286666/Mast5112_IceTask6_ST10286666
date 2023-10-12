/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

const App  = () => {
  const [name, setName] = useState('');
  const [CountingVowels, setVowelCounting] = useState<number>(0);
  const [CountingCons, setConsCounting] = useState<number>(0);

  const countVowels = (input: any): number => {
    return input.replace(/[^aeiouAEIOU]/g, '').length;
  };
  
  const countConsonants = (input: any): number => {
    return input.replace(/[aeiouAEIOU\s]/g, '').length;
  };

  const CoutingVowelsFromName = (text: any) => {
    setName(text);
    setVowelCounting(countVowels(text));
    setConsCounting(countConsonants(text));
  };

return(
  <SafeAreaView style={styles.Background}>
<View style={styles.HeaderContainer}>
  <Text style={styles.HeaderText}>
    Calling a function 
  </Text>
</View >
<View style ={styles.SubHeadingContianer}>
  <Text style ={styles.Subheading}>
    Enter a Name in the box Below
  </Text>
</View>
<View style={styles.InputContainer}>
<TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={CoutingVowelsFromName}
        />
</View>
<View style = {styles.DataContainer}>
<Text style ={styles.Text}>Name: {name}</Text>
<Text style ={styles.Text}>Vowels: {CountingVowels}</Text>
<Text style ={styles.Text}>Consonants: {CountingCons}</Text>
<Text style ={styles.Text}>Length: {name.length}</Text>
</View>
  </SafeAreaView>
)
 }

const styles = StyleSheet.create({

  Background:{
    backgroundColor: 'white',
  },

  HeaderContainer:{
    backgroundColor: 'orange',
    alignItems: 'center',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  HeaderText:{
    fontSize: 72,
    fontWeight: 'bold',
    color: 'white',
  },

  input: {
    height: 60,
    width: 300,
    borderWidth: 2,
    padding: 10,
    fontSize:28,
    backgroundColor: 'white',
    marginBottom:15,
  },

  InputContainer:{
    alignItems: 'center',
    marginTop:200,
   },

   Button:{
    alignItems:'center',
    marginBottom:15,
   },

   Text:{
    color: 'orange',
    fontSize:30
   },

   SubHeadingContianer: {
    marginTop: 55,
    alignItems: 'center'
   },

   Subheading:{
    color: 'orange',
    fontSize: 35,
   },
 
   DataContainer:{
    marginTop:35,
    alignItems: 'center'
  }
})

//https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript//
//https://stackoverflow.com/questions/21186950/count-and-count-when-to-use-which//
//https://www.freecodecamp.org/news/find-the-number-of-vowels-in-a-string-with-javascript//
////

export default App;
