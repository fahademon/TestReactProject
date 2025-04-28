import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

// Define the props type for Facility
type FacilityProps = {
  name: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
};

const Facility: React.FC<FacilityProps> = ({ name, icon, iconColor, backgroundColor }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          {
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <Image
          source={icon as ImageSourcePropType}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              tintColor: iconColor,
            },
          ]}
        />
      </TouchableOpacity>
      {name.length > 7 ? (
        <Text style={[styles.name, { color: colors.text }]}>{name.substring(0, 7)}...</Text>
      ) : (
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 12,
    width: (SIZES.width - 32) / 4,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    height: 24,
    width: 24,
  },
  name: {
    fontSize: 14,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.black,
  },
});

export default Facility;
