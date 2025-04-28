import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES } from '../constants';

// Define props type for AutoSlider
type AutoSliderProps = {
  images: ImageSourcePropType[];
};

const AutoSlider: React.FC<AutoSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      scrollViewRef.current?.scrollTo({
        animated: true,
        x: Dimensions.get('window').width * ((currentIndex + 1) % images.length),
        y: 0,
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const handlePaginationPress = (index: number) => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      animated: true,
      x: Dimensions.get('window').width * index,
      y: 0,
    });
  };

  return (
    <View>
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          style={styles.image}
          source={image}
        />
      ))}
    </ScrollView>
    <View style={styles.pagination}>
      {images.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.paginationDot,
            { backgroundColor: index === currentIndex ? COLORS.primary : '#C4C4C4' },
          ]}
          onPress={() => handlePaginationPress(index)}
        />
      ))}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: SIZES.height * 0.3,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default AutoSlider;
