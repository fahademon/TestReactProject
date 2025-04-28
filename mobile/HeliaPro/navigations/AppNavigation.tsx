import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import { AddNewAddress, AddNewCard, Address, Booking, BookingDetails, Bookings, Call, CancelBooking, CancelBookingPaymentMethods, ChangeEmail, ChangePassword, ChangePIN, Chat, CreateNewPassword, CreateNewPIN, CustomerService, EditProfile, EReceipt, FaceRecognitionScan, FaceRecognitionWalkThrough, Favourite, FeaturedHotels, FillYourProfile, Fingerprint, ForgotPasswordEmail, ForgotPasswordMethods, ForgotPasswordPhoneNumber, Gallery, HotelDetails, HotelReviews, Login, Notifications, Onboarding1, Onboarding2, Onboarding3, Onboarding4, OtpVerification, OurRecommendation, PaymentMethods, PhotoIdCard, ProofOfResidency, ReasonForUsingHelia, ReviewSummary, Search, SelfieWithIdCard, SettingsHelpCenter, SettingsInviteFriends, SettingsLanguage, SettingsNotifications, SettingsPayment, SettingsPrivacyPolicy, SettingsSecurity, Signup, TopupAmount, TopupConfirmPIN, TopupEreceipt, TopupMethods, TransactionHistory, VerifyYourIdentity, Wallet, Welcome } from '../screens';
import FaceRecognitionWalkthrough from '../screens/FaceRecognitionWalkThrough';
import { myFavoriteHotels } from '../data';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const checkIfFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyLaunched')
                if (value === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true')
                    setIsFirstLaunch(true)
                } else {
                    setIsFirstLaunch(false)
                }
            } catch (error) {
                setIsFirstLaunch(false)
            }
            setIsLoading(false) // Set loading state to false once the check is complete
        }

        checkIfFirstLaunch()
    }, [])

    if (isLoading) {
        return null // Render a loader or any other loading state component
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                // replace the second onboaring1 with login in order to make the user not to see the onboarding 
                // when login the next time
                initialRouteName={isFirstLaunch ? 'onboarding1' : 'welcome'}>
                <Stack.Screen component={Onboarding1} name="onboarding1" />
                <Stack.Screen component={Onboarding2} name="onboarding2" />
                <Stack.Screen component={Onboarding3} name="onboarding3" />
                <Stack.Screen component={Onboarding4} name="onboarding4" />
                <Stack.Screen component={Welcome} name="welcome" />
                <Stack.Screen component={Login} name="login" />
                <Stack.Screen component={Signup} name="signup" />
                <Stack.Screen component={ForgotPasswordMethods} name="forgotpasswordmethods" />
                <Stack.Screen component={ForgotPasswordPhoneNumber} name="forgotpasswordphonenumber" />
                <Stack.Screen component={ForgotPasswordEmail} name="forgotpasswordemail" />
                <Stack.Screen component={OtpVerification} name="otpverification" />
                <Stack.Screen component={CreateNewPIN} name="createnewpin" />
                <Stack.Screen component={Fingerprint} name="fingerprint" />
                <Stack.Screen component={FillYourProfile} name="fillyourprofile" />
                <Stack.Screen component={CreateNewPassword} name="createnewpassword" />
                <Stack.Screen component={ChangePIN} name="changepin" />
                <Stack.Screen component={ChangePassword} name="changepassword" />
                <Stack.Screen component={ChangeEmail} name="changeemail" />
                <Stack.Screen component={Address} name="address" />
                <Stack.Screen component={AddNewAddress} name="addnewaddress" />
                <Stack.Screen component={EditProfile} name="editprofile" />
                <Stack.Screen component={ReasonForUsingHelia} name="reasonforusinghelia" />
                <Stack.Screen component={VerifyYourIdentity} name="verifyyouridentity" />
                <Stack.Screen component={ProofOfResidency} name="proofofresidency" />
                <Stack.Screen component={PhotoIdCard} name="photoidcard" />
                <Stack.Screen component={SelfieWithIdCard} name="selfiewithidcard" />
                <Stack.Screen component={FaceRecognitionWalkThrough} name="facerecognitionwalkthrough" />
                <Stack.Screen component={FaceRecognitionScan} name="facerecognitionscan" />
                <Stack.Screen component={Notifications} name="notifications" />
                <Stack.Screen component={AddNewCard} name="addnewcard" />
                <Stack.Screen component={SettingsInviteFriends} name="settingsinvitefriends" />
                <Stack.Screen component={SettingsPrivacyPolicy} name="settingsprivacypolicy" />
                <Stack.Screen component={SettingsHelpCenter} name="settingshelpcenter" />
                <Stack.Screen component={SettingsLanguage} name="settingslanguage" />
                <Stack.Screen component={SettingsNotifications} name="settingsnotifications" />
                <Stack.Screen component={SettingsSecurity} name="settingssecurity" />
                <Stack.Screen component={SettingsPayment} name="settingspayment" />
                <Stack.Screen component={CustomerService} name="customerservice" />
                <Stack.Screen component={Favourite} name="favourite" />
                <Stack.Screen component={Search} name="search" />
                <Stack.Screen component={CancelBooking} name="cancelbooking" />
                <Stack.Screen component={CancelBookingPaymentMethods} name="cancelbookingpaymentmethods" />
                <Stack.Screen component={Chat} name="chat" />
                <Stack.Screen component={Gallery} name="gallery" />
                <Stack.Screen component={PaymentMethods} name="paymentmethods" />
                <Stack.Screen component={ReviewSummary} name="reviewsummary" />
                <Stack.Screen component={BottomTabNavigation} name="(tabs)" />
                <Stack.Screen component={Booking} name="booking" />
                <Stack.Screen component={BookingDetails} name="bookingdetails" />
                <Stack.Screen component={Bookings} name="bookings" />
                <Stack.Screen component={Call} name="call" />
                <Stack.Screen component={FeaturedHotels} name="featuredhotels" />
                <Stack.Screen component={HotelDetails} name="hoteldetails" />
                <Stack.Screen component={HotelReviews} name="hotelreviews" />
                <Stack.Screen component={EReceipt} name="ereceipt" />
                <Stack.Screen component={OurRecommendation} name="ourRecommendation" />
                <Stack.Screen component={TopupAmount} name="topupamount" />
                <Stack.Screen component={TopupConfirmPIN} name="topupconfirmpin" />
                <Stack.Screen component={TopupMethods} name="topupmethods" />
                <Stack.Screen component={TopupEreceipt} name="topupereceipt" />
                <Stack.Screen component={TransactionHistory} name="transactionhistory" />
                <Stack.Screen component={Wallet} name="wallet" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation