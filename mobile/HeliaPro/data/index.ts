import { COLORS, icons, images } from "../constants";


export const friends = [
    {
        id: "1",
        name: "Tynisa Obey",
        phoneNumber: "+1-300-400-0135",
        avatar: images.user1,
    },
    {
        id: "2",
        name: "Florencio Dorance",
        phoneNumber: "+1-309-900-0135",
        avatar: images.user2,
    },
    {
        id: "3",
        name: "Chantal Shelburne",
        phoneNumber: "+1-400-100-1009",
        avatar: images.user3,
    },
    {
        id: "4",
        name: "Maryland Winkles",
        phoneNumber: "+1-970-200-4550",
        avatar: images.user4,
    },
    {
        id: "5",
        name: "Rodolfo Goode",
        phoneNumber: "+1-100-200-9800",
        avatar: images.user5,
    },
    {
        id: "6",
        name: "Benny Spanbauer",
        phoneNumber: "+1-780-200-9800",
        avatar: images.user6,
    },
    {
        id: "7",
        name: "Tyra Dillon",
        phoneNumber: "+1-943-230-9899",
        avatar: images.user7,
    },
    {
        id: "8",
        name: "Jamel Eusobio",
        phoneNumber: "+1-900-234-9899",
        avatar: images.user8,
    },
    {
        id: "9",
        name: "Pedro Haurad",
        phoneNumber: "+1-240-234-9899",
        avatar: images.user9
    },
    {
        id: "10",
        name: "Clinton Mcclure",
        phoneNumber: "+1-500-234-4555",
        avatar: images.user10
    },
];

export const faqKeywords = [
    {
        id: "1",
        name: "General"
    },
    {
        id: "2",
        name: "Account"
    },
    {
        id: "3",
        name: "Security"
    },
    {
        id: "4",
        name: "Booking Management"
    },
    {
        id: "5",
        name: "Issues"
    },
    {
        id: "6",
        name: "Reservations"
    }
];

export const faqs = [
    {
        question: 'How do I book a room?',
        answer: 'To book a room, log in to the app, go to the "Bookings" section, and follow the prompts to select your desired dates, room type, and any additional preferences.',
        type: "Reservations"
    },
    {
        question: 'How can I reset my account password?',
        answer: 'To reset your account password, go to the login screen and click on "Forgot Password". Follow the instructions to reset your password. You may need to verify your identity using your registered email or phone number.',
        type: "Security"
    },
    {
        question: 'What should I do if I encounter an issue with my booking?',
        answer: 'If you encounter an issue with your booking, immediately contact customer support through the app. You can also modify or cancel your booking in the "Booking Management" section.',
        type: "Issues"
    },
    {
        question: 'How do I manage my existing reservations?',
        answer: 'To manage your existing reservations, go to the "Booking Management" section of the app, where you can view, modify, or cancel your current bookings.',
        type: "Booking Management"
    },
    {
        question: 'Can I update my booking details after reservation?',
        answer: 'Yes, you can update your booking details before your check-in date. Go to the "Booking Management" section, select the booking you want to update, and follow the instructions to change the details.',
        type: "Account"
    },
    {
        question: 'How do I update my contact information?',
        answer: "To update your contact information, go to your account settings. You can edit your profile details such as your address, phone number, and email.",
        type: "Account"
    },
    {
        question: 'How secure is my information in the app?',
        answer: 'We prioritize the security of your information. Our app uses advanced encryption and security protocols to ensure that your personal data is protected.',
        type: "Security"
    },
    {
        question: 'How can I view my booking history?',
        answer: 'To view your booking history, go to the "Booking Management" section of the app. You can filter bookings by date, status, and type.',
        type: "Booking Management"
    },
    {
        question: 'What amenities does the hotel offer?',
        answer: 'We offer a range of amenities including free Wi-Fi, a fitness center, spa services, and a swimming pool. Visit the "Amenities" section of the app for more details.',
        type: "General"
    },
    {
        question: 'How can I contact customer support?',
        answer: 'To contact customer support, go to the "Help" section in the app. You can reach us via chat, email, or phone. Our support team is available 24/7 to assist you.',
        type: "General"
    },
];


export const userAddresses = [
    {
        id: "1",
        name: "Home",
        address: "364 Stillwater Ave, Attleboro, MA 02703",
    },
    {
        id: "2",
        name: "Office",
        address: "73 Virginia Rd, Cuyahoga Falls, OH 44221",
    },
    {
        id: "3",
        name: "Mall Plaza",
        address: "123 Main St, San Francisco, CA 94107",
    },
    {
        id: "4",
        name: "Garden Park",
        address: "600 Bloom St, Portland, OR 97201",
    },
    {
        id: "5",
        name: "Grand City Park",
        address: "26 State St Daphne, AL 36526"
    },
    {
        id: "6",
        name: "Town Square",
        address: "20 Applegate St. Hoboken, NJ 07030"
    },
    {
        id: "7",
        name: "Bank",
        address: "917 W Pine Street Easton, PA 0423"
    }
];

export const transactionHistory = [
    {
        id: "1",
        image: images.user1,
        name: "Daniel Austin",
        date: "Dec 20, 2024 | 10:00 AM",
        type: "Purchase Expense",
        amount: "$14"
    },
    {
        id: "2",
        image: images.user2,
        name: "Top Up Wallet",
        date: "Dec 16, 2024 | 13:34 PM",
        type: "Top Up",
        amount: "$80"
    },
    {
        id: "3",
        image: images.user3,
        name: "Sarah Wilson",
        date: "Dec 14, 2024 | 11:39 AM",
        type: "Purchase Expense",
        amount: "$32"
    },
    {
        id: "4",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 10, 2024 | 09:32 AM",
        type: "Top Up",
        amount: "$112"
    },
    {
        id: "5",
        image: images.user5,
        name: "Benny Spanbauleur",
        date: "Dec 09, 2024 | 10:08 AM",
        type: "Purchase Expense",
        amount: "$43"
    },
    {
        id: "6",
        image: images.user6,
        name: "Roselle Dorrence",
        date: "Dec 08, 2024 | 09:12 AM",
        type: "Purchase Expense",
        amount: "$22"
    },
    {
        id: "7",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 08, 2024 | 16:28 PM",
        type: "Top Up",
        amount: "$200"
    },
    {
        id: "8",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 07, 2024 | 15:12 PM",
        type: "Top Up",
        amount: "$120"
    },
    {
        id: "9",
        image: images.user2,
        name: "Daniel Austion",
        date: "Dec 07, 2024 | 22:12 PM",
        type: "Top Up",
        amount: "$20"
    },
    {
        id: "10",
        image: images.user8,
        name: "Lucky Luck",
        date: "Dec 06, 2024 | 10:08 AM",
        type: "Purchase Expense",
        amount: "$12"
    },
    {
        id: "11",
        image: images.user2,
        name: "Jennifer Lucie",
        date: "Dec 03, 2024 | 11:48 AM",
        type: "Top Up",
        amount: "$45"
    }
];

export const messsagesData = [
    {
        id: "1",
        fullName: "Jhon Smith",
        isOnline: false,
        userImg: images.user1,
        lastSeen: "2023-11-16T04:52:06.501Z",
        lastMessage: 'I love you. see you soon baby',
        messageInQueue: 2,
        lastMessageTime: "12:25 PM",
    },
    {
        id: "2",
        fullName: "Anuska Sharma",
        isOnline: false,
        userImg: images.user2,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'I Know. you are so busy man.',
        messageInQueue: 0,
        lastMessageTime: "12:15 PM",
    },
    {
        id: "3",
        fullName: "Virat Kohili",
        userImg: images.user3,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Ok, see u soon',
        messageInQueue: 0,
        lastMessageTime: "09:12 PM",
        isOnline: true
    },
    {
        id: "4",
        fullName: "Shikhor Dhaon",
        isOnline: false,
        userImg: images.user4,
        lastSeen: "2023-11-18T04:52:06.501Z",
        lastMessage: 'Great! Do you Love it.',
        messageInQueue: 0,
        lastMessageTime: "04:12 PM",
    },
    {
        id: "5",
        fullName: "Shakib Hasan",
        isOnline: false,
        userImg: images.user5,
        lastSeen: "2023-11-21T04:52:06.501Z",
        lastMessage: 'Thank you !',
        messageInQueue: 2,
        lastMessageTime: "10:30 AM",
    },
    {
        id: "6",
        fullName: "Jacksoon",
        isOnline: false,
        userImg: images.user6,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 3,
        lastMessageTime: "10:05 PM",
    },
    {
        id: "7",
        fullName: "Tom Jerry",
        userImg: images.user7,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Do you want to go out dinner',
        messageInQueue: 2,
        lastMessageTime: "11:05 PM",
        isOnline: true
    },
    {
        id: "8",
        fullName: "Lucky Luck",
        userImg: images.user8,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Can you share the design with me?',
        messageInQueue: 2,
        lastMessageTime: "09:11 PM",
        isOnline: true
    },
    {
        id: "9",
        fullName: "Nate Jack",
        isOnline: false,
        userImg: images.user9,
        lastSeen: "2023-11-20T04:52:06.501Z",
        lastMessage: 'Tell me what you want?',
        messageInQueue: 0,
        lastMessageTime: "06:43 PM",
    }
];

export const callData = [
    {
        id: "1",
        fullName: "Roselle Erhman",
        userImg: images.user10,
        status: "Incoming",
        date: "Dec 19, 2024"
    },
    {
        id: "2",
        fullName: "Willard Purnell",
        userImg: images.user9,
        status: "Outgoing",
        date: "Dec 17, 2024"
    },
    {
        id: "3",
        fullName: "Charlotte Hanlin",
        userImg: images.user8,
        status: "Missed",
        date: "Dec 16, 2024"
    },
    {
        id: "4",
        fullName: "Merlin Kevin",
        userImg: images.user7,
        status: "Missed",
        date: "Dec 16, 2024"
    },
    {
        id: "5",
        fullName: "Lavern Laboy",
        userImg: images.user6,
        status: "Outgoing",
        date: "Dec 16, 2024"
    },
    {
        id: "6",
        fullName: "Phyllis Godley",
        userImg: images.user5,
        status: "Incoming",
        date: "Dec 15, 2024"
    },
    {
        id: "7",
        fullName: "Tyra Dillon",
        userImg: images.user4,
        status: "Outgoing",
        date: "Dec 15, 2024"
    },
    {
        id: "8",
        fullName: "Marci Center",
        userImg: images.user3,
        status: "Missed",
        date: "Dec 15, 2024"
    },
    {
        id: "9",
        fullName: "Clinton Mccure",
        userImg: images.user2,
        status: "Outgoing",
        date: "Dec 15, 2024"
    },
];

export const banners = [
    {
      id: "1",
      discount: '40%',
      discountName: "Today's Special",
      bottomTitle: 'Get a discount for every hotel booking!',
      bottomSubtitle: 'Only valid for today!'
    },
    {
      id: "2",
      discount: '50%',
      discountName: "Weekend Sale",
      bottomTitle: 'Special discount for weekend bookings!',
      bottomSubtitle: 'This weekend only!'
    },
    {
      id: "3",
      discount: '30%',
      discountName: "Limited Time Offer",
      bottomTitle: 'Hurry up! Limited time offer!',
      bottomSubtitle: 'Valid until supplies last!'
    }
];

export const featuredHotels = [
    {
        id: "1",
        name: "Modernica Hotel",
        image: images.hotel1,
        rating: 4.9,
        numReviews: 329,
        price: 590,
        location: "New York, US",
        categoryId: "2"
    },
    {
        id: "2",
        name: "Mill Super Resort",
        image: images.hotel2,
        rating: 4.8,
        numReviews: 120,
        price: 260,
        location: "Jakarta, Indonesia",
        categoryId: "3"
    },
    {
        id: "3",
        name: "Cosy Cottage Retreat",
        image: images.hotel3,
        rating: 4.7,
        numReviews: 75,
        price: 380,
        location: "London, UK",
        categoryId: "4"
    },
    {
        id: "4",
        name: "Sunny Seaside Villa",
        image: images.hotel4,
        rating: 4.6,
        numReviews: 240,
        price: 710,
        location: "Los Angeles, US",
        categoryId: "2"
    },
    {
        id: "5",
        name: "Mountain View Chalet",
        image: images.hotel5,
        rating: 4.9,
        numReviews: 412,
        price: 890,
        location: "Zurich, Switzerland",
        categoryId: "2"
    },
    {
        id: "6",
        name: "Rustic Farmhouse",
        image: images.hotel6,
        rating: 4.5,
        numReviews: 98,
        price: 450,
        location: "Tuscany, Italy",
        categoryId: "3"
    },
    {
        id: "7",
        name: "Urban Loft",
        image: images.hotel7,
        rating: 4.7,
        numReviews: 205,
        price: 620,
        location: "Berlin, Germany",
        categoryId: "3"
    },
    {
        id: "8",
        name: "Lakeside Retreat",
        image: images.hotel8,
        rating: 4.8,
        numReviews: 153,
        price: 570,
        location: "Toronto, Canada",
        categoryId: "4"
    },
    {
        id: "9",
        name: "Luxury Penthouse",
        image: images.hotel9,
        rating: 4.9,
        numReviews: 532,
        price: 1200,
        location: "Dubai, UAE",
        categoryId: "3"
    },
];

export const recommendedHotels = [
    {
        id: "1",
        name: "Secluded Beach Resort",
        image: images.hotel9,
        rating: 4.9,
        numReviews: 287,
        price: 880,
        location: "Maui, Hawaii",
        categoryId: "3"
    },
    {
        id: "2",
        name: "Scenic Mountain Lodge",
        image: images.hotel8,
        rating: 4.8,
        numReviews: 210,
        price: 72,
        location: "Banff, Canada",
        categoryId: "4" 
    },
    {
        id: "3",
        name: "Historic City Mansion",
        image: images.hotel7,
        rating: 4.7,
        numReviews: 162,
        price: 1100,
        location: "Paris, France",
        categoryId: "2"
    },
    {
        id: "4",
        name: "Serenity Forest Cabin",
        image: images.hotel6,
        rating: 4.9,
        numReviews: 389,
        price: 45,
        location: "Black Forest, Germany",
        categoryId: "2"
    },
    {
        id: "5",
        name: "Luxury Safari Lodge",
        image: images.hotel5,
        rating: 4.6,
        numReviews: 98,
        price: 15,
        location: "Maasai Mara, Kenya",
        categoryId: "4"
    },
    {
        id: "6",
        name: "Cozy Lakeside Cabin",
        image: images.hotel4,
        rating: 4.8,
        numReviews: 175,
        price: 58,
        location: "Lake District, UK",
        categoryId: "2"
    },
    {
        id: "7",
        name: "Tranquil Mountain Retreat",
        image: images.hotel3,
        rating: 4.9,
        numReviews: 432,
        price: 96,
        location: "Aspen, US",
        categoryId: "5"
    },
    {
        id: "8",
        name: "Modern City Penthouse",
        image: images.hotel2,
        rating: 4.7,
        numReviews: 249,
        price: 35,
        location: "Tokyo, Japan",
        categoryId: "3"
    },
    {
        id: "9",
        name: "Charming Countryside Cottage",
        image: images.hotel1,
        rating: 4.8,
        numReviews: 198,
        price: 52,
        location: "Provence, France",
        categoryId: "2"
    },
];

export const allHotels = [
    {
        id: "1",
        name: "Secluded Beach Resort",
        image: images.hotel9,
        rating: 4.9,
        numReviews: 287,
        price: 88,
        location: "Maui, Hawaii",
        categoryId: "3",
        facilities: ["Gym", "Parking", "Swimming Pool"]
    },
    {
        id: "2",
        name: "Scenic Mountain Lodge",
        image: images.hotel8,
        rating: 4.8,
        numReviews: 210,
        price: 72,
        location: "Banff, Canada",
        categoryId: "4",
        facilities: ["Gym", "Parking"]
    },
    {
        id: "3",
        name: "Historic City Mansion",
        image: images.hotel7,
        rating: 4.7,
        numReviews: 162,
        price: 56,
        location: "Paris, France",
        categoryId: "2",
        facilities: ["Car Parking", "Gym"]
    },
    {
        id: "4",
        name: "Serenity Forest Cabin",
        image: images.hotel6,
        rating: 4.9,
        numReviews: 389,
        price: 45,
        location: "Black Forest, Germany",
        categoryId: "2",
        facilities: ["Gym", "Car Parking"]
    },
    {
        id: "5",
        name: "Luxury Safari Lodge",
        image: images.hotel5,
        rating: 4.6,
        numReviews: 98,
        price: 74,
        location: "Maasai Mara, Kenya",
        categoryId: "4",
        facilities: ["Parking", "Swimming Pool"]
    },
    {
        id: "6",
        name: "Cozy Lakeside Cabin",
        image: images.hotel4,
        rating: 4.8,
        numReviews: 175,
        price: 58,
        location: "Lake District, UK",
        categoryId: "2",
        facilities: ["Restaurant", "Gym"]
    },
    {
        id: "7",
        name: "Tranquil Mountain Retreat",
        image: images.hotel3,
        rating: 4.9,
        numReviews: 432,
        price: 96,
        location: "Aspen, US",
        categoryId: "5",
        facilities: ["Parking", "Swimming Pool"]
    },
    {
        id: "8",
        name: "Modern City Penthouse",
        image: images.hotel2,
        rating: 4.7,
        numReviews: 249,
        price: 99,
        location: "Tokyo, Japan",
        categoryId: "3",
        facilities: ["Gym", "Parking"]
    },
    {
        id: "9",
        name: "Charming Countryside Cottage",
        image: images.hotel1,
        rating: 4.8,
        numReviews: 198,
        price: 52,
        location: "Provence, France",
        categoryId: "2",
        facilities: ["Swimming Pool", "Gym"]
    },
];

export const categories = [
    {
        id: "1",
        name: "🏨 All"
    },
    {
        id: "2",
        name: "🏢 Luxury Hotels"
    },
    {
        id: "3",
        name: "🏡 Resorts"
    },
    {
        id: "4",
        name: "🏘️ Condos"
    },
    {
        id: "5",
        name: "🏗️ Land"
    },
    {
        id: "6",
        name: "🏢 Commercial"
    },
    {
        id: "7",
        name: "🏝️ Vacation Homes"
    }
];

export const facilities = [
    {
        id: "1",
        name: "All"
    },
    {
        id: "2",
        name: "Car Parking"
    },
    {
        id: "3",
        name: "Swimming Pool"
    },
    {
        id: "4",
        name: "Gym"
    },
    {
        id: "5",
        name: "Parking"
    },
    {
        id: "6",
        name: "Restaurants"
    }
];

export const ratings = [
    {
        id: "1",
        title: "All"
    },
    {
        id: "6",
        title: "5"
    },
    {
        id: "5",
        title: "4"
    },
    {
        id: "4",
        title: "3"
    },
    {
        id: "3",
        title: "2"
    },
    {
        id: "2",
        title: "1"
    }
];

export const myFavoriteHotels = [
    {
        id: "1",
        name: "Secluded Beach Resort",
        image: images.hotel9,
        rating: 4.9,
        numReviews: 287,
        price: 88,
        location: "Maui, Hawaii",
        categoryId: "3",
        facilities: ["Gym", "Parking", "Swimming Pool"]
    },
    {
        id: "2",
        name: "Scenic Mountain Lodge",
        image: images.hotel8,
        rating: 4.8,
        numReviews: 210,
        price: 72,
        location: "Banff, Canada",
        categoryId: "4",
        facilities: ["Gym", "Parking"]
    },
    {
        id: "3",
        name: "Historic City Mansion",
        image: images.hotel7,
        rating: 4.7,
        numReviews: 162,
        price: 56,
        location: "Paris, France",
        categoryId: "2",
        facilities: ["Car Parking", "Gym"]
    },
    {
        id: "4",
        name: "Serenity Forest Cabin",
        image: images.hotel6,
        rating: 4.9,
        numReviews: 389,
        price: 45,
        location: "Black Forest, Germany",
        categoryId: "2",
        facilities: ["Gym", "Car Parking"]
    },
    {
        id: "5",
        name: "Luxury Safari Lodge",
        image: images.hotel5,
        rating: 4.6,
        numReviews: 98,
        price: 74,
        location: "Maasai Mara, Kenya",
        categoryId: "4",
        facilities: ["Parking", "Swimming Pool"]
    },
    {
        id: "6",
        name: "Cozy Lakeside Cabin",
        image: images.hotel4,
        rating: 4.8,
        numReviews: 175,
        price: 58,
        location: "Lake District, UK",
        categoryId: "2",
        facilities: ["Restaurant", "Gym"]
    },
    {
        id: "7",
        name: "Tranquil Mountain Retreat",
        image: images.hotel3,
        rating: 4.9,
        numReviews: 432,
        price: 96,
        location: "Aspen, US",
        categoryId: "5",
        facilities: ["Parking", "Swimming Pool"]
    },
    {
        id: "8",
        name: "Modern City Penthouse",
        image: images.hotel2,
        rating: 4.7,
        numReviews: 249,
        price: 99,
        location: "Tokyo, Japan",
        categoryId: "3",
        facilities: ["Gym", "Parking"]
    },
    {
        id: "9",
        name: "Charming Countryside Cottage",
        image: images.hotel1,
        rating: 4.8,
        numReviews: 198,
        price: 52,
        location: "Provence, France",
        categoryId: "2",
        facilities: ["Swimming Pool", "Gym"]
    },
];

export const hotelFacilties = [
    {
        id: "1",
        name: "Car Parking",
        icon: icons.car,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "2",
        name: "Swimming Pool",
        icon: icons.swimming,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "3",
        name: "Gym & Fitness",
        icon: icons.dumbell,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "4",
        name: "Restaurant",
        icon: icons.restaurant,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "5",
        name: "Wifi & Network",
        icon: icons.wifi,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "6",
        name: "Pet Center",
        icon: icons.pet,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "7",
        name: "Sport Center",
        icon: icons.sport,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    },
    {
        id: "8",
        name: "Laundry",
        icon: icons.laundry,
        iconColor: COLORS.primary,
        backgroundColor: COLORS.tansparentPrimary,
    }
];

export const gallery = {
    bathrooms: [
        {
            id: "1",
            image: images.bathroom1
        },
        {
            id: "2",
            image: images.bathroom2
        },
        {
            id: "3",
            image: images.bathroom3
        },
        {
            id: "4",
            image: images.bathroom4
        },
        {
            id: "5",
            image: images.bathroom5
        },
        {
            id: "6",
            image: images.bathroom6
        },
        {
            id: "7",
            image: images.bathroom7
        }
    ],
    bedrooms: [
        {
            id: "1",
            image: images.bedroom1
        },
        {
            id: "2",
            image: images.bedroom2
        },
        {
            id: "3",
            image: images.bedroom3
        },
        {
            id: "4",
            image: images.bedroom4
        },
        {
            id: "5",
            image: images.bedroom5
        },
        {
            id: "6",
            image: images.bedroom6
        },
        {
            id: "7",
            image: images.bedroom7
        }
    ],
    kitchens: [
        {
            id: "1",
            image: images.kitchen1
        },
        {
            id: "2",
            image: images.kitchen2
        },
        {
            id: "3",
            image: images.kitchen3
        },
        {
            id: "4",
            image: images.kitchen4
        },
        {
            id: "5",
            image: images.kitchen5
        },
        {
            id: "6",
            image: images.kitchen6
        },
        {
            id: "7",
            image: images.kitchen7
        }
    ],
    livingrooms: [
        {
            id: "1",
            image: images.livingroom1
        },
        {
            id: "2",
            image: images.livingroom2
        },
        {
            id: "3",
            image: images.livingroom3
        },
        {
            id: "4",
            image: images.livingroom4
        },
        {
            id: "5",
            image: images.livingroom5
        },
        {
            id: "6",
            image: images.livingroom6
        },
        {
            id: "7",
            image: images.livingroom7
        }
    ],
    parkings: [
        {
            id: "1",
            image: images.parking1
        },
        {
            id: "2",
            image: images.parking2
        },
        {
            id: "3",
            image: images.parking3
        },
        {
            id: "4",
            image: images.parking4
        },
        {
            id: "5",
            image: images.parking5
        },
        {
            id: "6",
            image: images.parking6
        },
        {
            id: "7",
            image: images.parking7
        }
    ] 
};

export const hotelReviews = [
    {
        id: "1",
        avatar: images.user1,
        name: "Maria Thompson",
        description: "The location of this hotel is exceptional! The staff was very friendly and helpful. Highly recommended! 😍",
        rating: 4.8,
        avgRating: 5,
        date: "2024-01-23T04:52:06.501Z",
        numLikes: 948
    },
    {
        id: "2",
        avatar: images.user2,
        name: "Ethan Harris",
        description: "I had a wonderful experience staying at this hotel. The ambiance is great and I felt very comfortable.",
        rating: 4.7,
        avgRating: 5,
        date: "2024-01-23T04:52:06.501Z",
        numLikes: 120
    },
    {
        id: "3",
        avatar: images.user3,
        name: "Sophia Martinez",
        description: "Amazing hotel! The amenities here are really convenient. I'll definitely be coming back!",
        rating: 4.7,
        avgRating: 5,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 89
    },
    {
        id: "4",
        avatar: images.user4,
        name: "Michael Johnson",
        description: "I'm very satisfied with my stay at this hotel. The service was professional and responsive.",
        rating: 4,
        avgRating: 4,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 384
    },
    {
        id: "5",
        avatar: images.user5,
        name: "Emma Wilson",
        description: "Great hotel with top-notch facilities! I felt refreshed and safe staying here. Highly recommend!",
        rating: 4.3,
        avgRating: 4,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 738
    },
    {
        id: "6",
        avatar: images.user6,
        name: "Oliver Brown",
        description: "The staff here is amazing! They addressed all my concerns promptly and exceeded my expectations.",
        rating: 4.8,
        avgRating: 5,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 12
    },
    {
        id: "7",
        avatar: images.user7,
        name: "Isabella White",
        description: "I had a fantastic experience staying at this hotel. The staff was friendly and the amenities were excellent!",
        rating: 4.9,
        avgRating: 5,
        date: "2024-01-29T04:52:06.501Z",
        numLikes: 450
    }
];

export const upcomingBooking = [
    {
        id: 1,
        status: "Unpaid",
        checkInDate: "28 Feb, 2025",
        checkOutDate: "07 Mar, 2025",
        name: "Elegant Hotels",
        image: images.hotel1,
        pricePerDay: 150,
        duration: 7,
        totalPrice: 1050,
        address: "123 Main St, Cityville",
        features: ["3 Bedrooms", "2 Bathrooms", "Garden"],
        hasRemindMe: true,
        rating: 4.9,
    },
    {
        id: 2,
        status: "Paid",
        checkInDate: "03 Mar, 2025",
        checkOutDate: "08 Mar, 2025",
        name: "Prime Properties",
        image: images.hotel2,
        pricePerDay: 120,
        duration: 5,
        totalPrice: 600,
        address: "0993, Novick Parkway",
        features: ["2 Bedrooms", "1 Bathroom", "Balcony"],
        hasRemindMe: true,
        rating: 4.7
    },
    {
        id: 3,
        status: "Unpaid",
        checkInDate: "12 Mar, 2025",
        checkOutDate: "19 Mar, 2025",
        name: "Luxury Living",
        image: images.hotel3,
        pricePerDay: 200,
        duration: 8,
        totalPrice: 1600,
        address: "8923, Butterfield Place",
        features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool"],
        hasRemindMe: false,
        rating: 4.8
    },
    {
        id: 4,
        status: "Paid",
        checkInDate: "15 Mar, 2025",
        checkOutDate: "20 Mar, 2025",
        name: "Cityscape Condos",
        image: images.hotel4,
        pricePerDay: 180,
        duration: 6,
        totalPrice: 1080,
        address: "678 Maple Avenue",
        features: ["2 Bedrooms", "2 Bathrooms", "Fitness Center"],
        hasRemindMe: true,
        rating: 4.6
    },
    {
        id: 5,
        status: "Unpaid",
        checkInDate: "20 Mar, 2025",
        checkOutDate: "27 Mar, 2025",
        name: "Harbor View Apartments",
        image: images.hotel5,
        pricePerDay: 100,
        duration: 7,
        totalPrice: 700,
        address: "456 Oak Street",
        features: ["1 Bedroom", "1 Bathroom", "Ocean View"],
        hasRemindMe: false,
        rating: 4.7,
    },
    {
        id: 6,
        status: "Paid",
        checkInDate: "25 Mar, 2025",
        checkOutDate: "02 Apr, 2025",
        name: "Skyline Towers",
        image: images.hotel6,
        pricePerDay: 220,
        duration: 9,
        totalPrice: 1980,
        address: "1010 Pine Road",
        features: ["3 Bedrooms", "2 Bathrooms", "City View"],
        hasRemindMe: true,
        rating: 4.8,
    },
    {
        id: 7,
        status: "Unpaid",
        checkInDate: "30 Mar, 2025",
        checkOutDate: "05 Apr, 2025",
        name: "Meadowbrook Villas",
        image: images.hotel7,
        pricePerDay: 130,
        duration: 6,
        totalPrice: 780,
        address: "246 Willow Lane",
        features: ["2 Bedrooms", "1 Bathroom", "Playground"],
        hasRemindMe: false,
        rating: 4.9,
    }
];

export const completedBooking = [
    {
        id: 1,
        status: "Paid",
        checkInDate: "28 Feb, 2025",
        checkOutDate: "07 Mar, 2025",
        name: "Elite Hotels",
        image: images.hotel4,
        pricePerDay: 150,
        duration: 7,
        totalPrice: 1050,
        address: "123 Main St, Cityville",
        features: ["3 Bedrooms", "2 Bathrooms", "Garden"]
    },
    {
        id: 2,
        status: "Paid",
        checkInDate: "03 Mar, 2025",
        checkOutDate: "08 Mar, 2025",
        name: "Premium Properties",
        image: images.hotel5,
        pricePerDay: 120,
        duration: 5,
        totalPrice: 600,
        address: "0993, Novick Parkway",
        features: ["2 Bedrooms", "1 Bathroom", "Balcony"],
        rating: 4.7,
    },
    {
        id: 3,
        status: "Paid",
        checkInDate: "12 Mar, 2025",
        checkOutDate: "19 Mar, 2025",
        name: "Luxury Living",
        image: images.hotel6,
        pricePerDay: 200,
        duration: 8,
        totalPrice: 1600,
        address: "8923, Butterfield Place",
        features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool"],
        rating: 4.8
    },
    {
        id: 4,
        status: "Paid",
        checkInDate: "15 Mar, 2025",
        checkOutDate: "20 Mar, 2025",
        name: "Cityscape Condos",
        image: images.hotel7,
        pricePerDay: 180,
        duration: 6,
        totalPrice: 1080,
        address: "678 Maple Avenue",
        features: ["2 Bedrooms", "2 Bathrooms", "Fitness Center"],
        rating: 4.7
    },
    {
        id: 5,
        status: "Paid",
        checkInDate: "20 Mar, 2025",
        checkOutDate: "27 Mar, 2025",
        name: "Harbor View Apartments",
        image: images.hotel8,
        pricePerDay: 100,
        duration: 7,
        totalPrice: 700,
        address: "456 Oak Street",
        features: ["1 Bedroom", "1 Bathroom", "Ocean View"],
        rating: 4.9,
    },
    {
        id: 6,
        status: "Paid",
        checkInDate: "25 Mar, 2025",
        checkOutDate: "02 Apr, 2025",
        name: "Skyline Towers",
        image: images.hotel9,
        pricePerDay: 220,
        duration: 9,
        totalPrice: 1980,
        address: "1010 Pine Road",
        features: ["3 Bedrooms", "2 Bathrooms", "City View"],
        rating: 4.8
    },
    {
        id: 7,
        status: "Paid",
        checkInDate: "30 Mar, 2025",
        checkOutDate: "05 Apr, 2025",
        name: "Meadowbrook Villas",
        image: images.hotel2,
        pricePerDay: 130,
        duration: 6,
        totalPrice: 780,
        address: "246 Willow Lane",
        features: ["2 Bedrooms", "1 Bathroom", "Playground"],
        rating: 4.9,
    }
];

export const cancelledBooking = [
    {
        id: 1,
        status: "Unpaid",
        checkInDate: "28 Feb, 2025",
        checkOutDate: "07 Mar, 2025",
        name: "Elegant Hotel",
        image: images.hotel2,
        pricePerDay: 150,
        duration: 7,
        totalPrice: 1050,
        address: "123 Main St, Cityville",
        features: ["3 Bedrooms", "2 Bathrooms", "Garden"],
        rating: 4.8
    },
    {
        id: 2,
        status: "Unpaid",
        checkInDate: "03 Mar, 2025",
        checkOutDate: "08 Mar, 2025",
        name: "Prime Properties",
        image: images.hotel3,
        pricePerDay: 120,
        duration: 5,
        totalPrice: 600,
        address: "0993, Novick Parkway",
        features: ["2 Bedrooms", "1 Bathroom", "Balcony"],
        rating: 4.7
    },
    {
        id: 3,
        status: "Unpaid",
        checkInDate: "12 Mar, 2025",
        checkOutDate: "19 Mar, 2025",
        name: "Luxury Living",
        image: images.hotel4,
        pricePerDay: 200,
        duration: 8,
        totalPrice: 1600,
        address: "8923, Butterfield Place",
        features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool"],
        rating: 4.9,
    },
    {
        id: 4,
        status: "Unpaid",
        checkInDate: "15 Mar, 2025",
        checkOutDate: "20 Mar, 2025",
        name: "Cityscape Condos",
        image: images.hotel5,
        pricePerDay: 180,
        duration: 6,
        totalPrice: 1080,
        address: "678 Maple Avenue",
        features: ["2 Bedrooms", "2 Bathrooms", "Fitness Center"],
        rating: 4.8
    },
    {
        id: 5,
        status: "Unpaid",
        checkInDate: "20 Mar, 2025",
        checkOutDate: "27 Mar, 2025",
        name: "Harbor View Apartments",
        image: images.hotel6,
        pricePerDay: 100,
        duration: 7,
        totalPrice: 700,
        address: "456 Oak Street",
        features: ["1 Bedroom", "1 Bathroom", "Ocean View"],
        rating: 4.9,
    },
    {
        id: 6,
        status: "Unpaid",
        checkInDate: "25 Mar, 2025",
        checkOutDate: "02 Apr, 2025",
        name: "Skyline Towers",
        image: images.hotel7,
        pricePerDay: 220,
        duration: 9,
        totalPrice: 1980,
        address: "1010 Pine Road",
        features: ["3 Bedrooms", "2 Bathrooms", "City View"],
        rating: 4.8
    },
    {
        id: 7,
        status: "Unpaid",
        checkInDate: "30 Mar, 2025",
        checkOutDate: "05 Apr, 2025",
        name: "Meadowbrook Villas",
        image: images.hotel8,
        pricePerDay: 130,
        duration: 6,
        totalPrice: 780,
        address: "246 Willow Lane",
        features: ["2 Bedrooms", "1 Bathroom", "Playground"],
        rating: 4.6
    }
];

export const notifications = [
    {
        id: "1",
        title: "Security Updates!",
        description: "Our app now supports Two-Factor Authentication. Enable it now to make your account more secure.",
        date: "2024-06-04T04:52:06.501Z",
        time: "4:52 PM",
        type: "Security",
        isNew: true
    },
    {
        id: "2",
        title: "New Room Options Available!",
        description: "We have added new room categories, including luxury suites and budget-friendly options. Check them out now.",
        date: "2024-06-04T08:52:06.501Z",
        time: "08:52 PM",
        type: "Services",
        isNew: true
    },
    {
        id: "3",
        title: "App Update Available!",
        description: "Update our app now to enjoy the latest features and a smoother booking experience.",
        date: "2024-06-04T07:12:06.501Z",
        time: "07:12 AM",
        type: "Update",
        isNew: false
    },
    {
        id: "4",
        title: "Booking Confirmed!",
        description: "Your hotel booking has been successfully confirmed. You can view your booking details and manage your stay from the app.",
        date: "2024-06-04T11:14:06.501Z",
        time: "11:14 AM",
        type: "Booking",
        isNew: false
    },
    {
        id: "5",
        title: "Account Setup Successful!",
        description: "Your account has been successfully created. Start booking your next stay with us.",
        date: "2024-06-03T08:39:06.501Z",
        time: "08:39 AM",
        type: "Account",
        isNew: false
    },
    {
        id: "6",
        title: "Stay Completed!",
        description: "We hope you enjoyed your stay. Leave a review and share your experience with others.",
        date: "2024-06-02T09:52:06.501Z",
        time: "09:52 AM",
        type: "Stay",
        isNew: false
    },
    {
        id: "7",
        title: "Scheduled Maintenance!",
        description: "Our app will undergo scheduled maintenance on June 10, 2024, from 02:00 AM to 04:00 AM. During this time, some features may not be available.",
        date: "2024-06-01T03:22:06.501Z",
        time: "03:22 AM",
        type: "Account",
        isNew: false
    },
    {
        id: "8",
        title: "New Hotels Added!",
        description: "We have partnered with new hotels in your favorite destinations. Explore the new options and book your stay now!",
        date: "2024-05-30T06:15:06.501Z",
        time: "06:15 AM",
        type: "Services",
        isNew: false
    },
    {
        id: "9",
        title: "Referral Bonus!",
        description: "Invite friends to book through our app and earn up to $50 for each successful referral.",
        date: "2024-05-29T10:00:06.501Z",
        time: "10:00 AM",
        type: "Promotion",
        isNew: false
    },
    {
        id: "10",
        title: "Password Change Successful!",
        description: "Your password has been changed successfully. If this wasn't you, please contact our support team immediately.",
        date: "2024-05-28T04:52:06.501Z",
        time: "04:52 AM",
        type: "Security",
        isNew: false
    }
];
