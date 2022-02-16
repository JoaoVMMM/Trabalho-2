import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Maps from "./Screens/Maps";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Maps' component={Maps} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};