import React from "react";
import { Text, View } from "react-native";
import { H1 } from "../H_Tags";
import { LogoWithLabel } from "../LogoWithLabel";
import { AboutDetails, TechnicalSkillsTypes } from "@/lib/constants";


const {TechnicalSkills} = AboutDetails

const Rating: React.FC<{progress: number}> = ({progress}) => {
    return (
        <View
        style={{
            height: 10,
            borderRadius: 7,
            marginTop: 7
        }}
         className="w-full bg-defaultGray relative">
            <View style={{
                  height: 10,
                  borderRadius: 7,
                 width: `${progress}%`
            }}
            className="bg-defaultGreen absolute"
            />
         </View>
    )
}


const TechnicalSkillsCard: React.FC<{item: TechnicalSkillsTypes}> = ({item}) => {
    const { Level, Experience, rating} = item
    return(
        <View style={{marginTop: 17}}>
            <LogoWithLabel item={item}/>
            <Text className="text-white font-montserratSemiBold">
                Level: <Text className="text-defaultGreen font-montserratExtraBold">{Level}</Text>
            </Text>
            <Text className="text-white font-montserratSemiBold">
                Experience: <Text className="text-defaultGreen font-montserratExtraBold">{Experience}</Text>
            </Text>
            <Rating progress={rating}/>
        </View>
    )
}


const RenderTechnicalSkills: React.FC = () => {
    return(
       <View 
       style={{gap: 17}}
       className="flex flex-row justify-center">
            <View style={{width: "47%"}}>
                {TechnicalSkills.map((item, index) => {
                    if(index <= Math.floor(TechnicalSkills.length / 2))
                    return(
                        <TechnicalSkillsCard key={index} item={item}/>
                    )
                })}
            </View>
            <View style={{width: "47%"}}>
                {TechnicalSkills.map((item, index) => {
                        if(index > Math.floor(TechnicalSkills.length / 2))
                    return(
                        <TechnicalSkillsCard key={index} item={item}/>
                    )
                })}
            </View>
       </View>
    )
}

export const TechnicalSkill: React.FC = () => {
    return(
        <View 
        className="px-4"
        style={{gap: 17}}>
            <H1 className="text-defaultGreen">Technical Skills</H1>
            <RenderTechnicalSkills/>
        </View>
    )
}