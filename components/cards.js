import React from 'react';
import {View, Text, Image, StyleSheet, Animated, Alert} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Lock from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

const Cards = () => {
  const styles = StyleSheet.create({
    issueTexts: {
      fontSize: 10,
      color: '#7b7b7b',
      fontFamily: 'Poppins-Medium',
    },
    issueBottomText: {
      color: '#211f20',
      fontFamily: 'Poppins-Medium',
    },
    actionIconStyles: {
      backgroundColor: '#fff',
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const deleteCard = () => {
    Alert.alert('Delete CLICK');
  };

  const lockCard = () => {
    Alert.alert('Lock CLICK');
  };

  let renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <View style={{marginLeft: 10}}>
        <Animated.View
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          <View
            style={{
              margin: 10,
              height: 200,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View style={styles.actionIconStyles}>
              <Icon name="delete" size={20} color="red" onPress={deleteCard} />
            </View>
            <View style={styles.actionIconStyles}>
              <Lock name="lock" size={20} color="#d2d2d2" onPress={lockCard} />
            </View>
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <>
      <Swipeable renderLeftActions={renderLeftActions}>
        <View
          style={{
            backgroundColor: '#ffd85a',
            height: 220,
            width: 370,
            borderRadius: 20,
            padding: 20,
            margin: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 19,
                fontFamily: 'Poppins-Medium',
              }}>
              Virtual Card
            </Text>
            <Image
              source={require('../components/img/visa-img2.png')}
              style={{
                width: 100,
                height: 55,
                position: 'absolute',
                right: -20,
                top: -10,
              }}
            />
          </View>
          <View style={{marginTop: 50}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Medium',
                color: '#211f20',
              }}>
              <Text>3214 </Text>
              <Text> 5698 </Text>
              <Text> 4532 </Text>
              <Text> 3472 </Text>
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{marginRight: 45}}>
              <Text style={[styles.issueTexts]}>CARD HOLDER</Text>
              <Text style={[styles.issueBottomText]}>John Doe</Text>
            </View>
            <View>
              <Text style={[styles.issueTexts]}>EXPIRATION</Text>
              <Text style={[styles.issueBottomText]}>02/22</Text>
            </View>
            <View>
              <Text style={[styles.issueTexts]}>CVV</Text>
              <Text style={[styles.issueBottomText]}>331</Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </>
  );
};

export default Cards;
