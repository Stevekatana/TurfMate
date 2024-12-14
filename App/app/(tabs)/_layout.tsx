import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#15E6CD', tabBarInactiveTintColor: 'gray', tabBarStyle:{backgroundColor: '#041d29'}}}>
        <Tabs.Screen 
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>,
                headerTitle:'TurfMate',
                headerTitleStyle:{color: 'white'},
                headerStyle:{backgroundColor:'#041d29'}
            }}    
        />
        <Tabs.Screen 
            name='search'
            options={{
                title: 'Explore',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color}/>,
            }}    
        />
        <Tabs.Screen 
            name='feed'
            options={{
                title: 'Feed',
                tabBarIcon: ({ color }) => <FontAwesome size={26} name="bell" color={color}/>,
            }}    
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title: 'Me',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color}/>,
            }}    
        />
    </Tabs>
  )
}