import React from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';

const SmbButton = (props) => {
  const {
    btnWidth,
    btnColor,
    btnTitle,
    btnBgColor,
    btnContainerProps,
    btnTextStyleProps,
    ...btnProps
  } = props;
  const styles = StyleSheet.create({
    btnContainer: {
      marginTop: 30,
      marginBottom: 30,
      backgroundColor: btnBgColor ? btnBgColor : '#fedb6a',
      width: btnWidth ? btnWidth : 250,
      borderRadius: 10,
      padding: 15,
    },
    buttonText: {
      fontSize: 20,
      textAlign: 'center',
      color: btnColor ? btnColor : '#635f38',
      fontFamily: 'Poppins-SemiBold',
    },
  });

  return (
    <TouchableHighlight {...btnProps} underlayColor="white">
      <View style={[styles.btnContainer, btnContainerProps]}>
        <Text style={[styles.buttonText, btnTextStyleProps]}>
          {btnTitle ? btnTitle : 'Sign in'}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default SmbButton;
