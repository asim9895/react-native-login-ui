import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View
          style={{
            marginTop: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 400, height: 140 }}></Image>
          <Text style={{ marginTop: 10, fontSize: 22, fontWeight: '500' }}>
            Licc
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Ionicons
                name='ios-logo-facebook'
                color='blue'
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Ionicons
                name='md-logo-google'
                color='crimson'
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text>Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#ABB4BD',
            fontSize: 14,
            textAlign: 'center',
            marginVertical: 20,
          }}>
          or
        </Text>

        <Text
          style={{
            color: '#FF1654',
            fontWeight: '500',
            fontSize: 14,
            textAlign: 'right',
          }}>
          Forgot Password?
        </Text>
        <TouchableOpacity style={styles.submitContainer}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 24,
            color: '#ABB4BD',
            fontSize: 14,
          }}>
          Don't have an account ? &nbsp;
          <Text
            style={{
              color: '#FF1654',
              fontWeight: '500',
              fontSize: 14,
              textAlign: 'right',
            }}>
            Register Now
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171 , 180 , 189 , 0.4)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171 , 180 , 189 , 0.30)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 20,84 , 0.24)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
