import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions, ImageSourcePropType, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CancelledBooking, CompletedBooking, UpcomingBooking } from '../tabs';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, icons, images, SIZES } from '../constants';
import useCatStore from '@common/store/useCatStore';
import { AdoptionRecord, Breed } from '@common/types/cat.types';

const renderScene = SceneMap({
  first: UpcomingBooking,
});

interface Route {
  key: string;
  title: string;
}

const MyBooking = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const layout = useWindowDimensions();
  const { dark, colors } = useTheme();
  const adoptions = useCatStore((s) => s.adoptionRecords);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Upcoming' },
    { key: 'second', title: 'Completed' },
    { key: 'third', title: 'Cancelled' }
  ]);
  
  
  
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
            Adoption Records
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

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <FlatList
                data={adoptions} // Use 'bookings' instead of 'upcomingBookings'
                keyExtractor={item => item.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity style={[styles.cardContainer, {
                    backgroundColor: dark ? COLORS.dark2 : COLORS.white,
                  }]}>
                    <View style={styles.detailsContainer}>
                      <View>
                        <Image
                          source={ {uri: item?.breed?.image?.url} }
                          resizeMode='cover'
                          style={styles.estateImage}
                        />
                      </View>
                      <View style={styles.detailsRightContainer}>
                        <Text style={[styles.name, {
                          color: dark ? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}>Name: {item.name}</Text>
                        <Text style={[styles.name, {
                          color: dark ? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}>Adopter: {item.adopterName}</Text>
                        <Text style={[styles.checkInOut, {
                          color: dark ? COLORS.grayscale400 : COLORS.grayscale700,
                        }]}>{item.adoptionDate}</Text>
                      </View>
                    </View>
                    <View style={[styles.separateLine, {
                      marginVertical: 10,
                      backgroundColor: dark ? COLORS.greyScale800 : COLORS.grayscale200,
                    }]} />
                  </TouchableOpacity>
                )}
                ></FlatList>
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
  cardContainer: {
    width: SIZES.width - 32,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 16
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900
  },
  statusContainer: {
    width: 54,
    height: 24,
    borderRadius: 6,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    borderWidth: 1
  },
  statusText: {
    fontSize: 10,
    color: COLORS.primary,
    fontFamily: "Urbanist Medium",
  },
  separateLine: {
    width: "100%",
    height: .7,
    backgroundColor: COLORS.greyScale800,
    marginVertical: 12
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  estateImage: {
    width: 88,
    height: 88,
    borderRadius: 16,
    marginHorizontal: 12
  },
  detailsRightContainer: {
    flex: 1,
    marginLeft: 12
  },
  name: {
    fontSize: 17,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900
  },
  checkInOut: {
    fontSize: 12,
    fontFamily: "Urbanist Regular",
    color: COLORS.grayscale700,
    marginVertical: 6
  },
  serviceTitle: {
    fontSize: 12,
    fontFamily: "Urbanist Regular",
    color: COLORS.grayscale700,
  },
  serviceText: {
    fontSize: 12,
    color: COLORS.primary,
    fontFamily: "Urbanist Medium",
    marginTop: 6
  },
  cancelBtn: {
    width: (SIZES.width - 32) / 2 - 16,
    height: 36,
    borderRadius: 24,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    borderColor: COLORS.primary,
    borderWidth: 1.4,
    marginBottom: 12
  },
  cancelBtnText: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary,
  },
})

export default MyBooking