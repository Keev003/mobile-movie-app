import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  // hides the groups header screens header. 
  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="movie/[id]"
      options={{headerShown: false}}
    />
  </Stack>;
}
