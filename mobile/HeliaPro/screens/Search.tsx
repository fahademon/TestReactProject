import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ImageSourcePropType } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import RBSheet from "react-native-raw-bottom-sheet";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, icons, images, SIZES } from '../constants';
import { allHotels, categories, facilities, ratings } from '../data';
import VerticalHotelCard from '../components/VerticalHotelCard';
import HorizontalHotelCard from '../components/HorizontalHotelCard';
import NotFoundCard from '../components/NotFoundCard';
import Button from '../components/Button';
import useCatStore from '@common/store/useCatStore';
import  { Breed, CatImage } from "@common/types/cat.types";

interface CustomSliderHandleProps {
  enabled: boolean;
  markerStyle: object;
}

interface SearchProps {
  navigation: NavigationProp<any>;
}

interface Rating {
  id: string;
  title: string;
}

interface Category {
  id: string;
  name: string;
}

interface Facility {
  id: string,
  name: string
}
// Handler slider
const CustomSliderHandle: React.FC<CustomSliderHandleProps> = ({ enabled, markerStyle }) => {
  return (
    <View
      style={[
        markerStyle,
        {
          backgroundColor: enabled ? COLORS.primary : 'lightgray',
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          width: 20,
          height: 20,
        },
      ]}
    />
  );
};

const Search: React.FC<SearchProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const refRBSheet = useRef<any>(null);
  const { dark, colors } = useTheme();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["1"]);
  const [selectedRating, setSelectedRating] = useState<string[]>(["1"]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]); // Initial price range
  const fetchBreeds = useCatStore(state => state.fetchBreeds);
  const breeds = useCatStore(state => state.breeds);
  const loading = useCatStore(state => state.loading);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  const handleSliderChange = (values: number[]) => {
    if (values.length === 2) {
      setPriceRange([values[0], values[1]]);
    }
  };
  /**
  * Render header
  */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              source={images.logo as ImageSourcePropType}
              resizeMode='contain'
              style={[styles.backIcon, {
                tintColor: dark ? COLORS.white : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>
            Search
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.moreCircle as ImageSourcePropType}
            resizeMode='contain'
            style={[styles.moreIcon, {
              tintColor: dark ? COLORS.white : COLORS.greyscale900
            }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  /**
   * Render content
  */
  const renderContent = () => {
    const [selectedTab, setSelectedTab] = useState('row');
    const [searchQuery, setSearchQuery] = useState('');
    const [resultsCount, setResultsCount] = useState(-1);
    const [filtered, setFiltered] = useState<Breed[]>([]);
    
    useEffect(() => {
      handleSearch();
      console.log(resultsCount)
    }, [searchQuery, selectedTab]);

    const handleSearch = () => {
      const term = searchQuery.toLowerCase();
      setFiltered(
        breeds.filter(b => 
          b.name.toLowerCase().includes(term) ||
          b.temperament.toLowerCase().includes(term) || 
          b.origin?.toLowerCase().includes(term) ||
          b.description?.toLowerCase().includes(term) ||
          b["alt_names"]?.toLowerCase().includes(term)
        )
      );
      
      searchQuery? setResultsCount(filtered.length): setResultsCount(-1);
      console.log(filtered)
    };

    return (
      <View>
        {/* Search Bar */}
        <View
          style={[styles.searchBarContainer, {
            backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
          }]}>
          <TouchableOpacity
            onPress={handleSearch}>
            <Image
              source={icons.search2 as ImageSourcePropType}
              resizeMode='contain'
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder='Search'
            placeholderTextColor={COLORS.gray}
            style={[styles.searchInput, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}>
            <Image
              source={icons.filter as ImageSourcePropType}
              resizeMode='contain'
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>

          <View style={styles.reusltTabContainer}>
            <View style={styles.viewDashboard}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedTab('column');
                  setSearchQuery(''); // Clear search query when changing tab
                }}>
                <Image
                  source={selectedTab === 'column' ? icons.document2 as ImageSourcePropType : icons.document2Outline as ImageSourcePropType}
                  resizeMode='contain'
                  style={styles.dashboardIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedTab('row');
                  setSearchQuery(''); // Clear search query when changing tab
                }}>
                <Image
                  source={selectedTab === 'row' ? icons.dashboard as ImageSourcePropType : icons.dashboardOutline as ImageSourcePropType}
                  resizeMode='contain'
                  style={styles.dashboardIcon}
                />
              </TouchableOpacity>
            </View>
            {searchQuery && resultsCount != -1 && <Text style={[styles.tabText, {
              color: dark ? COLORS.secondaryWhite : COLORS.black
            }]}>{resultsCount} found</Text>}
          </View>
        
        {/* Results container  */}
                { loading ? <View>Loading...</View>:

        <View>
          {/* hotels result list */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: dark ? COLORS.dark1 : COLORS.secondaryWhite,
              marginVertical: 16
            }}>
            {(resultsCount && (resultsCount != 0)) ? (
              <>
                {
                  selectedTab === 'row' ? (
                    <FlatList
                      data={searchQuery? filtered : breeds}
                      keyExtractor={(item) => item.id}
                      numColumns={2}
                      columnWrapperStyle={{ gap: 16 }}
                      renderItem={({ item }) => {
                        return (
                          <VerticalHotelCard
                            name={item.name}
                            image={item.image}
                            price={item.origin}
                            location={item.temperament}
                            onPress={() => navigation.navigate("hoteldetails",{
                                              breed: item
                                            })}
                          />
                        )
                      }}
                    />
                  ) : (
                    <FlatList
                      data={filtered}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => {
                        return (
                          <HorizontalHotelCard
                            name={item.name}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                            location={item.location}
                            onPress={() => navigation.navigate("hoteldetails",{
                                              breed: item
                                            })}
                          />
                        );
                      }}
                    />
                  )
                }
              </>
            ) : (
              <NotFoundCard />
            )}
          </ScrollView>
        </View>
      }
      </View>
    )
  }

  // Toggle category selection
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


  // toggle rating selection
  const toggleRating = (ratingId: string) => {
    const updatedRatings = [...selectedRating];
    const index = updatedRatings.indexOf(ratingId);

    if (index === -1) {
      updatedRatings.push(ratingId);
    } else {
      updatedRatings.splice(index, 1);
    }

    setSelectedRating(updatedRatings);
  };

  // Function to toggle selected facility
  const toggleFacility = (facilityId: string) => {
    // Check if the facility is already selected
    if (selectedFacilities.includes(facilityId)) {
      // If selected, remove it
      setSelectedFacilities(selectedFacilities.filter(id => id !== facilityId));
    } else {
      // If not selected, add it
      setSelectedFacilities([...selectedFacilities, facilityId]);
    }
  };

  const renderFacilitiesItem = ({ item }: { item: Facility }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedFacilities.includes(item.id) ? COLORS.primary : "transparent",
        padding: 10,
        marginVertical: 5,
        borderColor: COLORS.primary,
        borderWidth: 1.3,
        borderRadius: 24,
        marginRight: 12,
      }}
      onPress={() => toggleFacility(item.id)}>

      <Text style={{
        color: selectedFacilities.includes(item.id) ? COLORS.white : COLORS.primary
      }}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Category item
  const renderCategoryItem = ({ item }: { item: Category }) => (
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

  const renderRatingItem = ({ item }: { item: Rating }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedRating.includes(item.id) ? COLORS.primary : "transparent",
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginVertical: 5,
        borderColor: COLORS.primary,
        borderWidth: 1.3,
        borderRadius: 24,
        marginRight: 12,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() => toggleRating(item.id)}>
      <View style={{ marginRight: 6 }}>
        <FontAwesome name="star" size={14} color={selectedRating.includes(item.id) ? COLORS.white : COLORS.primary} />
      </View>
      <Text style={{
        color: selectedRating.includes(item.id) ? COLORS.white : COLORS.primary
      }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <View>
          {renderContent()}
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          height={580}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: dark ? COLORS.dark3 : "#000",
            },
            container: {
              borderTopRightRadius: 32,
              borderTopLeftRadius: 32,
              height: 580,
              backgroundColor: dark ? COLORS.dark2 : COLORS.white,
              alignItems: "center",
            }
          }}
        >
          <Text style={[styles.bottomTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Filter</Text>
          <View style={styles.separateLine} />
          <View style={{ width: SIZES.width - 32 }}>
            <Text style={[styles.sheetTitle, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Category</Text>
            <FlatList
              data={categories}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={renderCategoryItem}
            />
            <Text style={[styles.sheetTitle, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Filter</Text>
            <MultiSlider
              values={priceRange}
              sliderLength={SIZES.width - 32}
              onValuesChange={handleSliderChange}
              min={0}
              max={100}
              step={1}
              allowOverlap={false}
              snapped
              minMarkerOverlapDistance={40}
              customMarker={CustomSliderHandle}
              selectedStyle={{ backgroundColor: COLORS.primary }}
              unselectedStyle={{ backgroundColor: 'lightgray' }}
              containerStyle={{ height: 40 }}
              trackStyle={{ height: 3 }}
            />

            <Text style={[styles.sheetTitle, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Facilities</Text>

            <FlatList
              data={facilities}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={renderFacilitiesItem}
            />

            <Text style={[styles.sheetTitle, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Rating</Text>
            <FlatList
              data={ratings}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={renderRatingItem}
            />
          </View>

          <View style={styles.separateLine} />

          <View style={styles.bottomContainer}>
            <Button
              title="Reset"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                backgroundColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary,
                borderRadius: 32,
                borderColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary
              }}
              textColor={dark ? COLORS.white : COLORS.primary}
              onPress={() => refRBSheet.current.close()}
            />
            <Button
              title="Filter"
              filled
              style={styles.logoutButton}
              onPress={() => refRBSheet.current.close()}
            />
          </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  )
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
    marginBottom: 16
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  backIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
    marginLeft: 16
  },
  moreIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
    borderRadius: 12,
    height: 52,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.gray
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    marginHorizontal: 8,
    height:40
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width - 32,
    justifyContent: "space-between"
  },
  tabBtn: {
    width: (SIZES.width - 32) / 2 - 6,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.4,
    borderColor: COLORS.primary,
  },
  selectedTab: {
    width: (SIZES.width - 32) / 2 - 6,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.4,
    borderColor: COLORS.primary,
  },
  tabBtnText: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary,
    textAlign: "center"
  },
  selectedTabText: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.white,
    textAlign: "center"
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.width - 32,
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
  },
  subResult: {
    fontSize: 14,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary
  },
  resultLeftView: {
    flexDirection: "row"
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    paddingHorizontal: 16,
    width: SIZES.width
  },
  cancelButton: {
    width: (SIZES.width - 32) / 2 - 8,
    backgroundColor: COLORS.tansparentPrimary,
    borderRadius: 32
  },
  logoutButton: {
    width: (SIZES.width - 32) / 2 - 8,
    backgroundColor: COLORS.primary,
    borderRadius: 32
  },
  bottomTitle: {
    fontSize: 24,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.black,
    textAlign: "center",
    marginTop: 12
  },
  separateLine: {
    height: .4,
    width: SIZES.width - 32,
    backgroundColor: COLORS.greyscale300,
    marginVertical: 12
  },
  sheetTitle: {
    fontSize: 18,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.black,
    marginVertical: 12
  },
  reusltTabContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width - 32,
    justifyContent: "space-between"
  },
  viewDashboard: {
    flexDirection: "row",
    alignItems: "center",
    width: 36,
    justifyContent: "space-between"
  },
  dashboardIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.primary
  },
  tabText: {
    fontSize: 20,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.black
  }
})

export default Search