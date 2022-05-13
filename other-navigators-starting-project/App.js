import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // const Drawer = createDrawerNavigator();
  const BottomTab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#7813d6',
          drawerActiveTintColor: '#efddff',
          headerStyle: { backgroundColor: '#7813d6' },
          headerTintColor: '#efddff',
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color }) => (
              <Ionicons color={color} size={24} name="home" />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: 'User',
            drawerIcon: ({ color }) => (
              <Ionicons color={color} size={24} name="person" />
            ),
          }}
        />
      </Drawer.Navigator> */}
      <BottomTab.Navigator
        shifting={true}
        barStyle={{ backgroundColor: '#481957' }}
        activeColor="#c286df"
        
      >
        <BottomTab.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={20} />
            ),
          }}
        />
        <BottomTab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={20} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
