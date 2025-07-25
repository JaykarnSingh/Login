import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="application_process"
        options={{
          title: "Application Process",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: "FAQs",
          headerShown: true,
          headerTitle: () => (
            <View>
              <Text style={styles.faq_title}>FAQs</Text>
              <Text style={styles.faq_subtitle}>
                Find answers here
              </Text>
            </View>
          ),

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles=StyleSheet.create({
  faq_title:{
     fontSize: 16,
     fontWeight:"400"
  },
  faq_subtitle:{
    fontSize: 12,
     color: "#6B7280",
     fontWeight:"400" 
  }
})
