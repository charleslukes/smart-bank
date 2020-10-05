import React, {useState, useRef} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = (props) => {
  const movePlaceholderText = useRef(new Animated.Value(0)).current;
  const [isInputFocused, setisInputFocused] = useState(false);

  const {
    inputRef,
    error,
    borderColor = '#d2d2d2',
    iconColor,
    isPassword,
    inputPlaceholder,
    iconName,
    ...inputProps
  } = props;

  const movePlaceholderTextUp = () => {
    Animated.timing(movePlaceholderText, {
      toValue: -13,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const styles = StyleSheet.create({
    inputContainer: {
      position: 'relative',
      marginTop: 20,
      fontFamily: 'Poppins-Medium',
    },
    inputStyle: {
      borderRadius: 50,
      borderWidth: 2,
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 45,
      fontFamily: 'Hind-Medium',
    },
    iconStyle: {
      position: 'absolute',
      top: 13,
      left: 15,
    },
    error: {
      color: 'red',
      fontSize: 15,
      paddingTop: 5,
      paddingLeft: 5,
      fontFamily: 'Hind-Medium',
    },
    placeholderTextStyle: {
      position: 'absolute',
      top: 13,
      left: 45,
      backgroundColor: '#eee',
    },
  });

  const onInputFocus = (e) => {
    movePlaceholderTextUp();
    setisInputFocused(true);
  };

  return (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName ? iconName.toLowerCase() : 'user'}
        style={styles.iconStyle}
        size={20}
        color={iconColor ? iconColor : '#000'}
      />
      <TextInput
        autoCapitalize="none"
        ref={inputRef}
        style={[styles.inputStyle, {borderColor: error ? 'red' : borderColor}]}
        onFocus={onInputFocus}
        secureTextEntry={isPassword ? isPassword : false}
        {...inputProps}
      />
      <Animated.View
        style={
          !isInputFocused
            ? styles.placeholderTextStyle
            : {
                ...styles.placeholderTextStyle,
                top: movePlaceholderText,
                left: 30,
              }
        }>
        <Text
          style={{
            fontSize: 17,
            color: '#7b7b7b',
            fontFamily: 'Poppins-Medium',
          }}>
          {inputPlaceholder}
        </Text>
      </Animated.View>
      {error && error.message && (
        <Text style={styles.error}>{error && error.message}</Text>
      )}
    </View>
  );
};

export default Input;
