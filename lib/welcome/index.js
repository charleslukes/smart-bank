import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Btn from '../../components/button';

const Welcome = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: 300,
      marginBottom: 50,
    },

    welcomeText: {
      fontFamily: 'Poppins-Medium',
      fontSize: 17,
      textAlign: 'center',
      color: '#9e9e9e',
    },

    headerText: {
      fontSize: 60,
      fontFamily: 'Hind-Bold',
      marginBottom: 40,
      color: '#474546',
    },
  });

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Hello!</Text>
          <Text style={{...styles.welcomeText, marginBottom: 10}}>
            Please login with your credential and enjoy your workplace
          </Text>
          <Btn
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}
          />
          <Text style={styles.welcomeText}>
            New here? <Text style={{color: '#fedb6a'}}>Create account</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Welcome;
