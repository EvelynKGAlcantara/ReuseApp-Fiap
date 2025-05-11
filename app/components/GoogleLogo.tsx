import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GoogleLogoProps {
  size?: number;
}

const GoogleLogo = ({ size = 20 }: GoogleLogoProps) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.googleLogo}>
        <View style={[styles.colorBlock, { backgroundColor: '#EA4335', top: 0, left: 0 }]} />
        <View style={[styles.colorBlock, { backgroundColor: '#FBBC05', bottom: 0, left: 0 }]} />
        <View style={[styles.colorBlock, { backgroundColor: '#34A853', bottom: 0, right: 0 }]} />
        <View style={[styles.colorBlock, { backgroundColor: '#4285F4', top: 0, right: 0 }]} />
        <View style={styles.center} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  googleLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    position: 'relative',
  },
  colorBlock: {
    position: 'absolute',
    width: '50%',
    height: '50%',
  },
  center: {
    position: 'absolute',
    width: '40%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 50,
    top: '30%',
    left: '30%',
  },
});

export default GoogleLogo; 