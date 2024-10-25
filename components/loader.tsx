import { themeColor } from "@/styles/styles";
import React from "react";
import { View, ActivityIndicator } from "react-native";


export const Loader:React.FC = () => {
    return(
        <View className="flex items-center justify-center h-full">
            <ActivityIndicator size="large" color={themeColor.defaultGreen}/>
        </View>
    )
}