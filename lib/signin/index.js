import React from 'react';
import {View, Text, Alert, StyleSheet, Image, ScrollView} from 'react-native';
import FormInput from '../../components/form';
import {useForm} from 'react-hook-form';
import Input from '../../components/input';
import LoginBtn from '../../components/button';
import Svg, {Path} from 'react-native-svg';
import {SignInValidation} from '../../utils/validations';

const SignIn = (props) => {
  const {register, handleSubmit, setValue, errors} = useForm();

  const onSubmit = (data) => {
    Alert.alert('data', JSON.stringify(data));
    props.navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{flex: 1, height: 230}}>
          <View
            style={{
              backgroundColor: '#fedb6a',
              position: 'relative',
              height: 160,
            }}>
            <Image
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                top: '25%',
                left: '40%',
                borderRadius: 100 / 2,
                borderWidth: 5,
                borderColor: 'white',
              }}
            />
            <Svg
              height="60%"
              width="100%"
              viewBox="0 0 1440 320"
              style={{position: 'absolute', top: 155}}>
              <Path
                fill="#fedb6a"
                d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,112C672,107,768,53,864,64C960,75,1056,149,1152,160C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </Svg>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                color: '#211f20',
              }}>
              Welcome!
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'Poppins-Medium',
                textAlign: 'center',
                color: '#211f20',
              }}>
              Login to continue
            </Text>
          </View>
          <View style={{marginLeft: 15, marginRight: 15}}>
            <FormInput
              {...{register, validation: SignInValidation, errors, setValue}}>
              <Input {...{name: 'email', inputPlaceholder: 'Email'}} key={1} />
              <Input
                {...{
                  name: 'password',
                  iconName: 'key',
                  isPassword: true,
                  inputPlaceholder: 'Password',
                }}
                key={2}
              />
            </FormInput>
            <Text
              style={{
                fontSize: 15,
                color: '#7b7b7b',
                textAlign: 'right',
                marginTop: 7,
                fontFamily: 'Poppins-Medium',
              }}>
              Forget Password?
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <LoginBtn
              btnContainerProps={styles.btnContainerProps}
              btnTextStyleProps={styles.btnTextStyleProps}
              btnTitle="LOGIN"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}>
            New User? <Text style={{color: '#7b7b7b'}}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#fedb6a',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  btnContainerProps: {
    borderRadius: 50,
    width: 200,
    padding: 10,
  },
  btnTextStyleProps: {
    fontSize: 16,
  },
});

export default SignIn;
