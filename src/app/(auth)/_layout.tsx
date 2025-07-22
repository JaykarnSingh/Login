
import React from 'react'
import { Stack } from 'expo-router';

const AuthStack = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="application_process" />
      
    </Stack>
  )
}

export default AuthStack