import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import Header from '../components/Header';
import { COLORS, SIZES } from '../constants';
import ReasonItem from '../components/ReasonItem';
import Button from '../components/Button';

const reasons = [
  "Book a Room",
  "Schedule Room Cleaning",
  "Request Room Service",
  "Make a Restaurant Reservation",
  "Book a Spa Appointment",
  "Other Reasons"
];

type Nav = {
  navigate: (value: string) => void
}

const ReasonForUsingHamo = () => {
  const { navigate } = useNavigation<Nav>();
  const { colors, dark } = useTheme();
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const toggleReason = (reason: string) => {
    setSelectedReasons((prevSelectedReasons) =>
      prevSelectedReasons.includes(reason)
        ? prevSelectedReasons.filter((r) => r !== reason)
        : [...prevSelectedReasons, reason]
    );
  };

  const sendSelectedReasons = async () => {
    try {
      const response = await fetch('https://your-backend-endpoint.com/api/reasons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reasons: selectedReasons }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reasons');
      }

      Alert.alert('Success', 'Selected reasons sent successfully');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Error', 'An unknown error occurred');
      }
    }
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Reason for Using Helia</Text>
          <Text style={[styles.subtitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>We want to provide the best experience according to your needs.</Text>
          <View style={styles.reasonContainer}>
            {reasons.map((reason, index) => (
              <ReasonItem
                key={index}
                reason={reason}
                isChecked={selectedReasons.includes(reason)}
                onToggle={toggleReason}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Continue"
          filled
          style={styles.button}
          onPress={() => navigate("verifyyouridentity")}
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
    fontSize: 28,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    textAlign: "center",
    marginVertical: 22
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.greyscale900,
    textAlign: "center",
    paddingHorizontal: 3
  },
  reasonContainer: {
    marginVertical: 22
  },
  button: {
    marginTop: 12,
    width: SIZES.width - 32,
    borderRadius: 32
  },
  bottomContainer: {
    position: "absolute",
    bottom: 28,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  }
})

export default ReasonForUsingHamo