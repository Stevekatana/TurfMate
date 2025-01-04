import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="viewMore" 
                    options={{ 
                      headerTitle: '777',
                    }} 
      />
      <Stack.Screen name="bookingPage" 
                    options={{ 
                      headerTitle: '777 Recreational Center',
                    }} 
      />
    </Stack>
  )
}
