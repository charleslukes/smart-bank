import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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
  });
  return (
    <>
      <View
        style={{
          backgroundColor: '#ffd13e',
          height: 220,
          width: 370,
          borderRadius: 20,
          padding: 20,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text
            style={{color: '#fff', fontSize: 19, fontFamily: 'Poppins-Medium'}}>
            Virtual Card
          </Text>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{
              width: 100,
              height: 35,
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
    </>
  );
};

export default Cards;
