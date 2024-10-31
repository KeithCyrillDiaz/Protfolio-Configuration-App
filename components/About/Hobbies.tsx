import React from "react";
import { View } from "react-native";
import { LogoWithLabel } from "../LogoWithLabel";
import { AboutDetails } from "@/lib/constants";
import { Loader } from "../loader";
import { H1 } from "../H_Tags";




export const Hobbies: React.FC = () => {
    const {Hobbies} = AboutDetails
    return(
       <View className="px-4">
            <H1 className="text-defaultGreen">Hobbies</H1>
            <View 
            className="flex flex-row gap-2 pb-12 mt-4">
            <View className="gap-1">
                {Hobbies.map((hobby, index) => {
                        const {url, title} = hobby;
                        if(index < Math.ceil(Hobbies.length/2))
                        return (
                            <LogoWithLabel
                            width={170}
                            key={index} 
                            item={{
                                uri: url ?? "",
                                label: title
                            }}/>
                        )
                    })}
            </View>
            <View className="gap-1">
                {Hobbies.map((hobby, index) => {
                        const {url, title} = hobby;
                        if(index > Math.floor(Hobbies.length/2))
                        return (
                            <LogoWithLabel 
                            width={170}
                            key={index} item={{
                                uri: url ?? "",
                                label: title
                            }}/>
                        )
                    })}
            </View>

            </View>
       </View>
    )
}