import { HomeDetails } from "@/lib/constants";
import React from "react";
import { Image, View } from "react-native";
import { Loader } from "../loader";


type ProfilePictureProps = {
    uri: string;
    className?: string;
    rounded?: string
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({uri, className, rounded}) => {
    if(!uri) {
        return (
            <Loader/>
        )
    }
    return(
        <View className={`${className ?? "h-[27vh] w-[30vh]"} overflow-hidden flex items-center justify-center`}>
            <Image
                source={{uri: uri}}
                height={300}
                width={300}
                resizeMethod="auto"
                resizeMode="contain"
            />
        </View>
    )
}
