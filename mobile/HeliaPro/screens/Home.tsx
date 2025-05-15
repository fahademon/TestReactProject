import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ListRenderItem, ImageSourcePropType } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, icons, images, SIZES } from '../constants';
import { banners, categories, featuredHotels, recommendedHotels } from '../data';
import SectionHeader from '../components/SectionHeader';
import FeaturedHotelCard from '../components/FeaturedHotelCard';
import VerticalHotelCard from '../components/VerticalHotelCard';
import useCatStore from "@common/store/useCatStore";
import { Breed, CatImage } from "@common/types/cat.types";

interface HomeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

interface CategoryItem {
  id: string;
  name: string;
}


const Home: React.FC<HomeProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["1"]);
  const { dark, colors } = useTheme();
  const fetchBreeds = useCatStore(state => state.fetchBreeds);
  const breeds = useCatStore(state => state.breeds);
  const loading = useCatStore(state => state.loading);

  
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<Breed[]>([]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  useEffect(() => {
    if (!search) {
      setFiltered(breeds);
    } else {
      const term = search.toLowerCase();
      setFiltered(
        breeds.filter(b => 
          b.name.toLowerCase().includes(term) ||
          b.temperament.toLowerCase().includes(term) || 
          b.origin?.toLowerCase().includes(term) ||
          b.description?.toLowerCase().includes(term) ||
          b["alt_names"]?.toLowerCase().includes(term)
        )
      );
    }
    console.log(breeds[0])
  }, [search, breeds]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.viewLeft}>
        <Image
          source={images.user1}
          resizeMode='contain'
          style={styles.userIcon}
        />
        <View style={styles.viewNameContainer}>
          <Text style={styles.greeeting}>Good Morning👋</Text>
          <Text style={[styles.title, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Andrew Ainsley</Text>
        </View>
      </View>
      <View style={styles.viewRight}>
        <TouchableOpacity
          onPress={() => navigation.navigate("notifications")}>
          <Image
            source={icons.notificationBell as ImageSourcePropType}
            resizeMode='contain'
            style={[styles.bellIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("favourite")}>
          <Image
            source={icons.bookmarkOutline as ImageSourcePropType}
            resizeMode='contain'
            style={[styles.bookmarkIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSearchBar = () => {
    const handleInputFocus = () => {
      navigation.navigate('search');
    };

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("search")}
        style={[styles.searchBarContainer, {
          backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
        }]}>
        <TouchableOpacity>
          <Image
            source={icons.search2 as ImageSourcePropType}
            resizeMode='contain'
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder='Search'
          placeholderTextColor={COLORS.gray}
          style={styles.searchInput}
          onFocus={handleInputFocus}
        />
        <TouchableOpacity>
          <Image
            source={icons.filter as ImageSourcePropType}
            resizeMode='contain'
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  const renderOurRecommendationHotels = () => {
    const filteredHotels = recommendedHotels.filter(hotel => selectedCategories.includes("1") || selectedCategories.includes(hotel.categoryId));

    const renderCategoryItem: ListRenderItem<CategoryItem> = ({ item }) => (
      <TouchableOpacity
        style={{
          backgroundColor: selectedCategories.includes(item.id) ? COLORS.primary : "transparent",
          padding: 10,
          marginVertical: 5,
          borderColor: COLORS.primary,
          borderWidth: 1.3,
          borderRadius: 24,
          marginRight: 12,
        }}
        onPress={() => toggleCategory(item.id)}>
        <Text style={{
          color: selectedCategories.includes(item.id) ? COLORS.white : COLORS.primary
        }}>{item.name}</Text>
      </TouchableOpacity>
    );

    const toggleCategory = (categoryId: string) => {
      const updatedCategories = [...selectedCategories];
      const index = updatedCategories.indexOf(categoryId);

      if (index === -1) {
        updatedCategories.push(categoryId);
      } else {
        updatedCategories.splice(index, 1);
      }

      setSelectedCategories(updatedCategories);
    };

    return (
      <View>
        <SectionHeader
          title="Our Recommendation"
          subtitle="See All"
          onPress={() => navigation.navigate("ourrecommendation")}
        />
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={renderCategoryItem}
        />
        <View style={{
          backgroundColor: dark ? COLORS.dark1 : COLORS.secondaryWhite,
          marginVertical: 16
        }}>
          <FlatList
            data={breeds}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ gap: 16 }}
            renderItem={({ item }) => (
              <VerticalHotelCard
                name={item.name}
                image={item.image}
                price={item.origin}
                location={item.temperament}
                //onPress={() => navigation.navigate("hoteldetails")}
              />
            )}
          />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderSearchBar()}
          {renderOurRecommendationHotels()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userIcon: {
    width: 48,
    height: 48,
    borderRadius: 32
  },
  viewLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  greeeting: {
    fontSize: 12,
    fontFamily: "Urbanist Regular",
    color: "gray",
    marginBottom: 4
  },
  title: {
    fontSize: 18,
    fontFamily: "Urbanist Bold",
  },
  viewNameContainer: {
    marginLeft: 16
  },
  viewRight: {
    flexDirection: "row"
  },
  bellIcon: {
    width: 24,
    height: 24
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    marginLeft: 16
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    height: 48,
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontFamily: "Urbanist Regular",
    color: COLORS.gray
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray
  },
  bannerContainer: {
    width: SIZES.width - 32,
    height: 154,
    paddingHorizontal: 28,
    paddingTop: 28,
    borderRadius: 32,
    backgroundColor: COLORS.primary
  },
  bannerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bannerDicount: {
    fontSize: 12,
    fontFamily: "Urbanist Medium",
    color: COLORS.white,
    marginBottom: 4
  },
  bannerDiscountName: {
    fontSize: 16,
    fontFamily: "Urbanist Bold",
    color: COLORS.white
  },
  bannerDiscountNum: {
    fontSize: 46,
    fontFamily: "Urbanist Bold",
    color: COLORS.white
  },
  bannerBottomContainer: {
    marginTop: 8
  },
  bannerBottomTitle: {
    fontSize: 14,
    fontFamily: "Urbanist Medium",
    color: COLORS.white
  },
  bannerBottomSubtitle: {
    fontSize: 14,
    fontFamily: "Urbanist Medium",
    color: COLORS.white,
    marginTop: 4
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 999
  },
  firstName: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.dark2,
    marginTop: 6
  },
  bannerItemContainer: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    height: 170,
    borderRadius: 32,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.grayscale400,
    marginHorizontal: 4
  },
  activeDot: {
    backgroundColor: COLORS.white
  }
});

export default Home;