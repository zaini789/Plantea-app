import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth
import SplashScreen from './screens/SplashScreen';
import RoleSelectionScreen from './screens/auth/RoleSelectionScreen';
import LoginScreen from './screens/auth/LoginScreen';

// Buyer
import HomeScreen from './screens/buyer/HomeScreen';
import PlantDetailScreen from './screens/buyer/PlantDetailScreen';
import AIScannerScreen from './screens/buyer/AiScannerScreen';
import ScanResultScreen from './screens/buyer/ScanResultScreen';
import OrderSummaryScreen from './screens/buyer/OrderSummaryScreen';
import OrderSuccessScreen from './screens/buyer/OrderSuccessScreen';
import OrderTrackingScreen from './screens/buyer/OrdertrackingScreen';
import ProfileScreen from './screens/buyer/ProfileScreen';

// Seller
import SellerDashboardScreen from './screens/seller/SellerDashboardScreen';
import AddPlantListingScreen from './screens/seller/AddPlantListingScreen';
import SellerEarningsScreen from './screens/seller/SellerEarningsScreen';

// Rider
import RiderDashboardScreen from './screens/rider/RiderDashboardScreen';
import RiderEarningsScreen from './screens/rider/RiderEarningsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
        <Stack.Screen name="AIScanner" component={AIScannerScreen} />
        <Stack.Screen name="ScanResult" component={ScanResultScreen} />
        <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SellerDashboard" component={SellerDashboardScreen} />
        <Stack.Screen name="AddPlantListing" component={AddPlantListingScreen} />
        <Stack.Screen name="SellerEarnings" component={SellerEarningsScreen} />
        <Stack.Screen name="RiderDashboard" component={RiderDashboardScreen} />
        <Stack.Screen name="RiderEarnings" component={RiderEarningsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}