import React, { useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { COLORS, images } from '../constants';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type Nav = {
  navigate: (value: string) => void
}

const Onboarding1 = () => {
  const { navigate } = useNavigation<Nav>();

  // Add UseEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('onboarding2');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground
      source={images.onboardingSplash}
      style={styles.area}>
      <StatusBar hidden />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.background}>
        <Text style={styles.greetingText}>Welcome to</Text>
        <Text style={styles.logoName}>Helia!👋</Text>
        <Text style={styles.subtitle}>The best hotel booking in this century to accompany your vacation!</Text>
      </LinearGradient>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1
  },
  background: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 270,
  },
  greetingText: {
    fontSize: 40,
    color: COLORS.white,
    fontFamily: "Urbanist Bold",
    marginVertical: 12,
    paddingHorizontal: 16
  },
  logoName: {
    fontSize: 76,
    color: COLORS.white,
    fontFamily: "Urbanist ExtraBold",
    paddingHorizontal: 16
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 12,
    fontFamily: "Urbanist SemiBold",
    paddingHorizontal: 16
  }
})

export default Onboarding1;