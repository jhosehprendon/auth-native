import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB9i10Dp3eFM7ID_AxKh7FZ1jNp74PMwfI",
            authDomain: "auth-native-30466.firebaseapp.com",
            databaseURL: "https://auth-native-30466.firebaseio.com",
            projectId: "auth-native-30466",
            storageBucket: "auth-native-30466.appspot.com",
            messagingSenderId: "985457977564"
          })
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Header headerText={'Authentication'}/>
                </View>
                <LoginForm />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    }
  });

export default App