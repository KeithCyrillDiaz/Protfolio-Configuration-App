import React from "react";
import { Text, View } from "react-native";
import { ProfilePicture } from "./ProfilePicture";
import { HomeDetails } from "@/lib/constants";
import { Button } from "../Buttons";
import { themeColor } from "@/styles/styles";



const TopLeftCornerFrame: React.FC = () => (
    <View className="bg-white absolute top-0 left-0 h-[9vh] w-[9vh]"/>
)

const BottomRightCornerFrame: React.FC = () => (
    <View className="bg-defaultGreen absolute bottom-0 right-0 h-[26vh] w-[27.5vh]"/>
)

const FramePicture:React.FC<{className?: string}> = ({className}) => {
    const {profilePicture} = HomeDetails
    return(
        <View className={`${className ?? "h-[31vh] w-[32vh]"} relative  items-center flex justify-center`}>
            <TopLeftCornerFrame/>
            <BottomRightCornerFrame/>
            <View className="bg-white absolute top-0 left-0 h-[9vh] w-[9vh]"/>
            <ProfilePicture uri={profilePicture}/>
        </View>
    )
}

const Buttons: React.FC = () => {
    return (
        <View className="flex flex-row gap-2 ">
            <Button 
                title={"Send Email"}
                onPress={() => {}}/>
              
            <Button
                width={170}
                title={"Download Resume"}
                color= {themeColor.defaultGray}
                onPress={() => {}}/>
    </View>
    )
}


const Details: React.FC = () => {
    return(
        <View className="mx-[5%]">  
            <Text className="text-white text-[5vh] font-montserratExtraBold">{HomeDetails.name}</Text>
            <Text className="text-defaultGreen text-[2vh]">{HomeDetails.role}</Text>
            <View className="flex flex-row items-center mb-2">
                <Text className="text-white text-[1.7vh]">{HomeDetails.subtitle[0]}</Text>
                <Text className="text-defaultGreen text-[1.7vh]">{HomeDetails.subtitle[1]}</Text>
                <Text className="text-white text-[1.7vh]">{HomeDetails.subtitle[2]}</Text>
            </View>
            <Buttons/>
        </View>
        
    )
}



export const Contents: React.FC = () => {

    return(
        <View className=" h-full flex items-center gap-7 py-[17vh]">
            <FramePicture />
            <Details/>
        </View>
    )
}