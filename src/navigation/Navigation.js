// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../components/OrderScreen";
import SelectColorScreen from "../components/SelectColorScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}
      >
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="SelectColorScreen" component={SelectColorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;