import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground, ImageSourcePropType, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, FONTS, SIZES, icons, images, socials } from '../constants';
import AutoSlider from '../components/AutoSlider';
import { ScrollView } from 'react-native-virtualized-view';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { hotelFacilties } from '../data';
import Facility from '../components/Facility';
import MapView, { Marker, Callout } from 'react-native-maps';
import { mapDarkStyle, mapStandardStyle } from '../data/mapData';
import ReviewCard from '../components/ReviewCard';
import Button from '../components/Button';
import RBSheet from "react-native-raw-bottom-sheet";
import SocialIcon from '../components/SocialIcon';
import { NavigationProp, useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigations/types';
import LinearGradient from 'react-native-linear-gradient';
import { Breed, CatImage } from "@common/types/cat.types";

type Props = RouteProp<RootStackParamList, 'BreedDetails'>;

const HotelDetails = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const { dark } = useTheme();
    const refRBSheet = useRef<any>(null);
    const route = useRoute<Props>();
    const {breed} = route.params;
    console.log(breed)

    // Slider images
    const sliderImages = [
        {uri : breed?.image? breed?.image.url : undefined}
    ];

    const renderHeader = () => {
        const [isFavorite, setIsFavorite] = useState(false);

        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.back as ImageSourcePropType}
                        resizeMode='contain'
                        style={styles.backIcon}
                    />
                </TouchableOpacity>

                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => setIsFavorite(!isFavorite)}>
                        <Image
                            source={isFavorite ? icons.heart2 as ImageSourcePropType : icons.heart2Outline as ImageSourcePropType}
                            resizeMode='contain'
                            style={styles.bookmarkIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.sendIconContainer}
                        onPress={() => refRBSheet.current.open()}>
                        <Image
                            source={icons.send2 as ImageSourcePropType}
                            resizeMode='contain'
                            style={styles.sendIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    /**
    * render content
    */
    const renderContent = (breed: Breed) => {
        const [expanded, setExpanded] = useState(false);

        const description = breed.description;

        const toggleExpanded = () => {
            setExpanded(!expanded);
        };

        return (
            <View style={styles.contentContainer}>
                <Text style={[styles.estateName, {
                    color: dark ? COLORS.secondaryWhite : COLORS.black,
                }]}>{breed?.name}</Text>
                {breed["alt_names"] && <View style={styles.ratingContainer}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryName}>Also known as: {breed["alt_names"]}</Text>
                    </View>
                </View>}

                <View style={styles.viewContainer}>
                    <View style={styles.viewItemContainer}>
                        <View style={styles.viewItemIcon}>
                            <Image
                                source={icons.box2 as ImageSourcePropType}
                                resizeMode="contain"
                                style={styles.viewIcon}
                            />
                        </View>
                        <Text style={[styles.viewTitle, {
                            color: dark ? COLORS.tertiaryWhite : COLORS.black
                        }]}>{breed.weight.metric} kgs</Text>
                    </View>
                    <View style={styles.viewItemContainer}>
                        <View style={styles.viewItemIcon}>
                            <Image
                                source={icons.health as ImageSourcePropType}
                                resizeMode="contain"
                                style={styles.viewIcon}
                            />
                        </View>
                        <Text style={[styles.viewTitle, {
                            color: dark ? COLORS.tertiaryWhite : COLORS.black
                        }]}>{breed.life_span} years</Text>
                    </View>
                    <View style={styles.viewItemContainer}>
                        <View style={styles.viewItemIcon}>
                            <Image
                                source={icons.world as ImageSourcePropType}
                                resizeMode="contain"
                                style={styles.viewIcon}
                            />
                        </View>
                        <Text style={[styles.viewTitle, {
                            color: dark ? COLORS.tertiaryWhite : COLORS.black
                        }]}>{breed.origin}</Text>
                    </View>
                </View>
                <View style={[styles.separateLine, {
                    backgroundColor: dark ? COLORS.greyScale800 : COLORS.grayscale200,
                }]} />


                <Text style={[styles.viewSubtitle, {
                    color: dark ? COLORS.secondaryWhite : COLORS.greyscale900,
                }]}>Overview</Text>
                <Text style={[styles.description, {
                    color: dark ? COLORS.grayscale400 : COLORS.grayscale700,
                }]} numberOfLines={expanded ? undefined : 2}>{description}</Text>
                <TouchableOpacity onPress={toggleExpanded}>
                    <Text style={styles.viewBtn}>
                        {expanded ? 'View Less' : 'View More'}
                    </Text>
                </TouchableOpacity>




            </View>
        )
    }

    return (
        <View style={[styles.area,
        { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
            <StatusBar  />
            <AutoSlider images={sliderImages} />
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderContent(breed)}
            </ScrollView>
            <View style={[styles.bookBottomContainer, {
                backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                borderTopColor: dark ? COLORS.dark1 : COLORS.white,
            }]}>
                <Button
                    title="Adopt"
                    filled
                    style={styles.bookingBtn}
                    onPress={() => navigation.navigate("booking", {
                        breed: breed
                    })}
                />
            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnPressMask={true}
                height={360}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                    draggableIcon: {
                        backgroundColor: dark ? COLORS.dark3 : COLORS.grayscale200,
                    },
                    container: {
                        borderTopRightRadius: 32,
                        borderTopLeftRadius: 32,
                        height: 360,
                        backgroundColor: dark ? COLORS.dark2 : COLORS.white,
                        alignItems: "center",
                    }
                }}
            >
                <Text style={[styles.bottomTitle, {
                    color: dark ? COLORS.white : COLORS.greyscale900
                }]}>Share</Text>
                <View style={[styles.separateLine, {
                    backgroundColor: dark ? COLORS.grayscale700 : COLORS.grayscale200,
                    marginVertical: 12
                }]} />
                <View style={styles.socialContainer}>
                    <SocialIcon
                        icon={socials.whatsapp}
                        name="WhatsApp"
                        onPress={() => console.log("WhatsApp")}
                    />
                    <SocialIcon
                        icon={socials.twitter}
                        name="X"
                        onPress={() => console.log("Twitter")}
                    />
                    <SocialIcon
                        icon={socials.facebook}
                        name="Facebook"
                        onPress={() => console.log("Facebook")}
                    />
                    <SocialIcon
                        icon={socials.instagram}
                        name="Instagram"
                        onPress={() => console.log("Instagram")}
                    />
                </View>
                <View style={styles.socialContainer}>
                    <SocialIcon
                        icon={socials.yahoo}
                        name="Yahoo"
                        onPress={() => console.log("Yahoo")}
                    />
                    <SocialIcon
                        icon={socials.titktok}
                        name="Tiktok"
                        onPress={() => console.log("Tiktok")}
                    />
                    <SocialIcon
                        icon={socials.messenger}
                        name="Chat"
                        onPress={() => console.log("Chat")}
                    />
                    <SocialIcon
                        icon={socials.wechat}
                        name="Wechat"
                        onPress={() => console.log("Wechat")}
                    />
                </View>
            </RBSheet>
        </View>
    )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerContainer: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        top: 32,
        zIndex: 999,
        left: 16,
        right: 16
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    sendIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    sendIconContainer: {
        marginLeft: 8
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentContainer: {
        marginHorizontal: 16
    },
    estateName: {
        fontSize: 24,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        marginVertical: 6
    },
    categoryContainer: {
        backgroundColor: COLORS.tansparentPrimary,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 6,
        width: "auto",
    },
    categoryName: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: COLORS.primary
    },
    rating: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: COLORS.black
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    numReviewContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12
    },
    viewContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12
    },
    viewItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8
    },
    viewItemIcon: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.tansparentPrimary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999
    },
    viewIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary
    },
    viewTitle: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.black,
        marginLeft: 0
    },
    separateLine: {
        width: SIZES.width - 32,
        height: 1,
        backgroundColor: COLORS.grayscale100
    },
    userInfoContainer: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 6
    },
    userImage: {
        width: 52,
        height: 52,
        borderRadius: 999
    },
    userName: {
        fontSize: 16,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.black
    },
    userPosition: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.grayscale700,
        marginTop: 3
    },
    userInfoRightContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    userInfoLeftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    chatIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    phoneIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    viewSubtitle: {
        fontSize: 20,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginVertical: 12
    },
    description: {
        fontSize: 14,
        color: COLORS.grayscale700,
        fontFamily: "Urbanist Regular",
    },
    viewBtn: {
        color: COLORS.primary,
        marginTop: 5,
        fontSize: 14,
        fontFamily: "Urbanist SemiBold",
    },
    subItemContainer: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    seeAll: {
        color: COLORS.primary,
        fontSize: 14,
        fontFamily: "Urbanist SemiBold"
    },
    coverImageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    coverImage: {
        width: (SIZES.width - 32) / 3 - 9,
        height: (SIZES.width - 32) / 3 - 9,
        borderRadius: 16,
        zIndex: 999
    },
    gradientImage: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: (SIZES.width - 32) / 3 - 9,
        height: (SIZES.width - 32) / 3 - 9,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    numImage: {
        fontSize: 22,
        color: COLORS.white,
        fontFamily: "Urbanist Bold",
    },
    estateItemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    locationIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.primary,
        marginRight: 8
    },
    locationText: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.grayscale700,
    },

    locationMapContainer: {
        height: 226,
        width: "100%",
        borderRadius: 12,
        marginVertical: 16
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        borderRadius: 12,
        backgroundColor: COLORS.dark2
    },
    viewMapContainer: {
        height: 50,
        backgroundColor: COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 'auto',
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
    },
    reviewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: SIZES.width - 32,
        marginVertical: 16
    },
    reviewLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    starMiddleIcon: {
        height: 18,
        width: 18,
        tintColor: "orange",
        marginRight: 8
    },
    reviewTitle: {
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        fontSize: 18
    },
    bookBottomContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: SIZES.width,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 104,
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopColor: COLORS.white,
        borderTopWidth: 1,
    },
    priceContainer: {
        flexDirection: "column",
    },
    priceText: {
        fontFamily: "Urbanist Regular",
        color: COLORS.grayscale700,
        fontSize: 14,
        marginBottom: 4
    },
    priceDurationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        fontFamily: "Urbanist Bold",
        color: COLORS.primary,
        fontSize: 26
    },
    priceDuration: {
        fontFamily: "Urbanist Regular",
        color: COLORS.grayscale700,
        fontSize: 16
    },
    bookingBtn: {
        width: 212
    },
    bottomTitle: {
        fontSize: 24,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.black,
        textAlign: "center",
        marginTop: 12
    },
    socialContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12,
        width: SIZES.width - 32
    }
})

export default HotelDetails