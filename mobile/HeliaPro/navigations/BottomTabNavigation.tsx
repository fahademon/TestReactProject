import { View, Platform, Image, Text, ImageSourcePropType } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { Bookings, Home, Profile, Search, Wallet } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const { dark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: Platform.OS !== 'ios',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 90 : 60,
                    backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Search}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                paddingTop: 16,
                                width: SIZES.width / 5
                            }}>
                                <Image
                                    source={focused ? icons.home as ImageSourcePropType : icons.home2Outline as ImageSourcePropType}
                                    resizeMode="contain"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Home</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Adoptions"
                component={Bookings}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                paddingTop: 16,
                                width: SIZES.width / 5
                            }}>
                                <Image
                                    source={focused ? icons.document2 as ImageSourcePropType : icons.document2Outline as ImageSourcePropType}
                                    resizeMode="contain"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Adoptions</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                paddingTop: 16,
                                width: SIZES.width / 5
                            }}>
                                <Image
                                    source={focused ? icons.profile2 as ImageSourcePropType : icons.profile2Outline as ImageSourcePropType}
                                    resizeMode="contain"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Profile</Text>
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation