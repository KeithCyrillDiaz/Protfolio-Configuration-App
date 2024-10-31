import { themeColor } from "@/styles/styles";
import React from "react";
import { View, ActivityIndicator } from "react-native";


export const Loader:React.FC<{className?: string}> = ({className}) => {
    return(
        <View className={`${className ? className :  "h-full"} flex items-center justify-center`}>
            <ActivityIndicator size="large" color={themeColor.defaultGreen}/>
        </View>
    )
}