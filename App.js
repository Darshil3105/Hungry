import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <Icon color={color} size={size} name="list" />
        )
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => (
          <Icon color={color} size={size} name="star" />
        )
      }} />
    </Drawer.Navigator>
  );
};

function App(){
  return(
  <>
    <StatusBar backgroundColor="#351401" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
              title: 'About the Meal',
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  </>
  );
};

export default App;
