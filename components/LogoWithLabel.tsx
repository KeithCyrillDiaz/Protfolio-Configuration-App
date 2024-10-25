
import React from "react";
import { Image, Text, View } from "react-native";
import { Loader } from "./loader";

export const LogoWithLabel: React.FC<{item: {uri: string; label: string}}> = ({item}) => {

    if(!item) {
        return (
            <Loader/>
        )
    }

    const {uri, label} = item
    
    return(
        <View
        style={{
            width: "100%",
            borderRadius: 7,
            gap:12,
            marginBottom: "3%"
        }}
        className="flex flex-row bg-defaultGray items-center ">
            <Image
                source={{uri: uri}}
                height={50}
                width={50}
                style={{
                    borderRadius:7
                }}
            />
            <Text className="text-white font-montserratExtraBold">{label}</Text>
        </View>
    )
}