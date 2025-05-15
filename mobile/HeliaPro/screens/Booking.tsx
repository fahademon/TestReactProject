import { View, Text, StyleSheet, Image, TextInput, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { Calendar, DateData } from 'react-native-calendars';
import { ScrollView } from 'react-native-virtualized-view';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';
import { NavigationProp, useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigations/types';
import { MarkedDates } from 'react-native-calendars/src/types';
import { Breed, CatImage, AdoptionRecord } from "@common/types/cat.types";
import useCatStore from '@common/store/useCatStore';

type Props = RouteProp<RootStackParamList, 'BreedDetails'>;

// select booking dates
const Booking = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { colors, dark } = useTheme();
  const [petName, setPetName] = useState("");
  const [adopterName, setAdopterName] = useState("");

  
  const route = useRoute<Props>();
  const {breed} = route.params;

  const adopt = useCatStore((s) => s.adoptNow);
  const [adopted, setAdopted] = useState(false);

  function handleAdoption() {
    adopt({
      adopterName: adopterName,
      breed: breed,
      name: petName,
      adoptionDate: new Date().toISOString(),
    });
    setAdopted(true);
    navigation.goBack();
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="Adopt" />
          <Text style={[styles.title, {
            color: dark ? COLORS.secondaryWhite : COLORS.black
          }]}>Adopter's Name</Text>
          <TextInput
            placeholder='e.g John Smith'
            placeholderTextColor={COLORS.grayscale700}
            style={[styles.noteInput, {
              backgroundColor: dark ? COLORS.dark2 : COLORS.tertiaryWhite,
              color: dark ? COLORS.secondaryWhite : COLORS.black
            }]}
            value={adopterName}
            onChangeText={(text) => {
              setAdopterName(text);
            }}
          />
          <Text style={[styles.title, {
            color: dark ? COLORS.secondaryWhite : COLORS.black
          }]}>Cat's Name</Text>
          <TextInput
            placeholder='e.g Whiskers'
            placeholderTextColor={COLORS.grayscale700}
            style={[styles.noteInput, {
              backgroundColor: dark ? COLORS.dark2 : COLORS.tertiaryWhite,
              color: dark ? COLORS.secondaryWhite : COLORS.black
            }]}
            value={petName}
            onChangeText={(petName) => setPetName(petName)}
          />
        <Button
          title="Adopt"
          style={styles.button}
          filled
          onPress={() => handleAdoption()}
        />
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
    padding: 16,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 18,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
    marginVertical: 16
  },
  selectedDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  selectedDateLeftContainer: {
    width: (SIZES.width - 32) / 2 - 12,
    marginVertical: 12
  },
  selectedDateTitle: {
    fontSize: 18,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
    marginBottom: 12
  },
  dateContainer: {
    width: (SIZES.width - 32) / 2 - 12,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.tertiaryWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12
  },
  dateText: {
    fontSize: 13,
    fontFamily: "Urbanist Regular",
    color: COLORS.grayscale700
  },
  calendarIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.black
  },
  noteInput: {
    width: SIZES.width - 32,
    height: 50,
    borderRadius: 16,
    backgroundColor: COLORS.tertiaryWhite,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: COLORS.greyscale900,
    fontFamily: "Urbanist Regular"
  },
  button: {
    position: "absolute",
    bottom: 6,
    width: SIZES.width - 32,
    backgroundColor: COLORS.primary,
    right: 16,
    left: 16
  },
  selectedDatesText: {
    fontSize: 14
  }
})

export default Booking