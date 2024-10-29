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

const ProjectBar: React.FC<{projectNumber: number}> = ({projectNumber}) => {
    return(
        <View 
        style={{
            gap: 4
        }}
        className="flex flex-row w-full h-[1vh] rounded-[7px] ">
            {Array.from({length: 5}).map((_, index) => (
                 <View key={index} className={`${index < projectNumber ? "bg-defaultGreen" : "bg-defaultGray"}  h-full w-[3.8vh] rounded-[7px]`}/>
            ))}
        </View>
    )
}

const ProjectCard: React.FC<{projectNumber: number}> = ({projectNumber}) => {
    return(
        <View className="gap-2">
            <Text className="text-white font-montserratExtraBold text-[1.5vh]">
               Projects: <Text className="text-defaultGreen">{projectNumber}/5 completed</Text>
            </Text>
            <ProjectBar projectNumber={projectNumber}/>
        </View>
    )
}


const TechnicalSkillsCard: React.FC<{item: TechnicalSkillsTypes}> = ({item}) => {
    const { Level, Experience, url, title, projects} = item
    return(
        <View style={{marginTop: 17}}>
            <LogoWithLabel item={{uri: url, label: title}}/>
            <Text className="text-white font-montserratSemiBold text-[1.5vh]">
                Level: <Text className="text-defaultGreen font-montserratExtraBold">{Level}</Text>
            </Text>
            <Text className="text-white font-montserratSemiBold text-[1.5vh]">
                Experience: <Text className="text-defaultGreen font-montserratExtraBold">{Experience}</Text>
            </Text>
            <ProjectCard projectNumber={projects.length}/>
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