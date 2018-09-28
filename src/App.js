import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {loggedIn: null}

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB9i10Dp3eFM7ID_AxKh7FZ1jNp74PMwfI",
            authDomain: "auth-native-30466.firebaseapp.com",
            databaseURL: "https://auth-native-30466.firebaseio.com",
            projectId: "auth-native-30466",
            storageBucket: "auth-native-30466.appspot.com",
            messagingSenderId: "985457977564"
          });
        
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          })
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return <Button text= 'Log Out'/>
            case false:
                return <LoginForm />
            default:
                return <Spinner size='large' />
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Header headerText={'Authentication'}/>
                </View>
                <CardSection>
                    {this.renderContent()}
                </CardSection> 
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