import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { COLORS, SIZES, icons } from '../constants';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from '../theme/ThemeProvider';
import { Breed, CatImage } from "@common/types/cat.types"

// Define the props type for the component
interface CatCardProps {
  name: string;
  image: CatImage;
  price: string;
  location: string;
  onPress: () => void;
}

const VerticalHotelCard: React.FC<CatCardProps> = ({
  name,
  image,
  price,
  location,
  onPress
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const { dark } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {
        backgroundColor: dark ? COLORS.dark2 : COLORS.white
      }]}
    >
      {image && <Image
        source={image?.url ? { uri: image.url } : undefined}
        resizeMode='cover'
        style={styles.image}
      />}
      <Text style={[styles.name, {
        color: dark ? COLORS.secondaryWhite : COLORS.greyscale900,
      }]}>
        {name}
      </Text>
      <Text style={[styles.location, {
        color: dark ? COLORS.greyscale300 : COLORS.grayscale700,
      }]}>
        {location}
      </Text>
      {0 && <View style={styles.bottomPriceContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
          <Image
            source={isFavourite ? icons.heart2 as ImageSourcePropType : icons.heart2Outline as ImageSourcePropType}
            resizeMode='contain'
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: (SIZES.width - 32) / 2 - 12,
    backgroundColor: COLORS.white,
    padding: 4,
    borderRadius: 16,
    marginBottom: 12
  },
  image: {
    width: "95%",
    height: 130,
    borderRadius: 16,
    marginLeft: 4,
    marginTop: 4
  },
  name: {
    fontSize: 16,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    marginVertical: 4,
    marginHorizontal:4
  },
  location: {
    fontSize: 12,
    fontFamily: "Urbanist Regular",
    color: COLORS.grayscale700,
    marginVertical: 4,
    marginHorizontal: 4
  },
  bottomPriceContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  price: {
    fontSize: 18,
    fontFamily: "Urbanist Bold",
    color: COLORS.primary,
    marginRight: 8
  },
  durationText: {
    fontSize: 14,
    fontFamily: "Urbanist Regular",
    color: COLORS.grayscale700
  },
  heartIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.primary,
    marginLeft: 6
  },
  reviewContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 46,
    height: 20,
    borderRadius: 16,
    backgroundColor: COLORS.transparentWhite2,
    zIndex: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  rating: {
    fontSize: 12,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary,
    marginLeft: 4
  },
});

export default VerticalHotelCard;
