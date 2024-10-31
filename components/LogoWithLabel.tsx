
import React from "react";
import { Image, Text, View } from "react-native";
import { Loader } from "./loader";

export const LogoWithLabel: React.FC<{item: {uri: string; label: string}; width?: number}> = ({item, width}) => {

    if(!item || item.uri === "" || !item.uri) {
        return (
            <Loader className="h-[2vh]"/>
        )
    }

    const {uri, label} = item
    
    return(
        <View
        style={{
            borderRadius: 7,
            gap:12,
            marginBottom: "3%",
            width: width ?? "100%"
        }}
        className={`flex flex-row bg-defaultGray items-center `}>
            <Image
                source={{uri: uri}}
                height={50}
                width={50}
                style={{
                    borderRadius:7
                }}
            />
            <Text className="text-white font-montserratExtraBold text-[1.4vh]">{label}</Text>
        </View>
    )
}