import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

// Define the props type for SocialIcon
type SocialIconProps = {
  icon: string;
  name: string;
  onPress: (event: GestureResponderEvent) => void;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, name, onPress }) => {
  const { dark } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icon as ImageSourcePropType}
        resizeMode='contain'
        style={styles.icon}
      />
      <Text style={[styles.name, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  icon: {
    width: (SIZES.width - 32) / 4 - 24,
    height: (SIZES.width - 32) / 4 - 24,
  },
  name: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
    fontFamily: "Urbanist Regular",
    marginTop: 6,
  },
});

export default SocialIcon;
