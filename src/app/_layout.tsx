
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  
  useEffect(()=>{
    setTimeout(()=>{
    SplashScreen.hideAsync();
    })  
  },[])

  return (
    <>
    <Stack screenOptions={{headerShown:false}}/>
    <Redirect href={"./(auth)"}/>
    </>
  )
}

export default RootLayout