import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import { H1, H2 } from "../H_Tags";
import { fetchExperienceData } from "@/API/fetchExperience";
import { Loader } from "../loader";
import { Paragraph } from "./PersonalInformation";
import { CircleIcon } from "../icons";

export type dateTypes = 
'January' | 'February' | 'March' | 'April' | 'May' | 'June'
| 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type ExperienceTypes = {
    startingMonth: dateTypes;
    endingMonth: dateTypes;
    year: number;
    company: string;
    role: string;
    bulletsData: string[];
}

const TimelineStick: React.FC<{ isLast?: boolean }> = ({ isLast }) => {
    return (
        <View className="mt-2 items-center">
            <CircleIcon size={14} />
            {!isLast && (
                <View className="bg-defaultGray w-[0.6vh] h-full flex-1" /> 
            )}
        </View>
    );
};

const ExperienceCard: React.FC<{ experienceData: ExperienceTypes[] }> = ({ experienceData }) => {
    return (
        <View className="flex flex-col gap-4 my-4">
            {experienceData.map((exp, index) => {
                const { startingMonth, endingMonth, year, company, role, bulletsData } = exp;
                return (
                    <View key={index} className="flex flex-row gap-4 pr-12">
                        <TimelineStick isLast={index === experienceData.length} />
                        <View className="gap-2 pb-4">
                            <Text className="bg-defaultGray text-white py-2 px-1 w-[40%] text-[1.4vh] font-montserratExtraBold text-center rounded-[5px]">
                                {startingMonth} - {endingMonth} {year}
                            </Text>
                            <H2>{company}</H2>
                            <H2 className="text-defaultGreen">{role}</H2>
                            <View className="gap-4">
                                {bulletsData.map((text, idx) => (
                                    <View key={idx} className="flex flex-row gap-2">
                                        <CircleIcon className="mt-2" size={7} />
                                        <Paragraph className="text-white text-[1.4vh] text-justify">{text}</Paragraph>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

type status = "loading" | "idle" 

export const Experience: React.FC = () => {
    
    const [experienceData, setExperienceData] = useState<ExperienceTypes[]>()
    const [status, setStatus] = useState<status>("idle")
    const fetchData = async () => {
        try {
            setStatus("loading")
            const data = await fetchExperienceData()
            if(!data) {
                console.log("failed fetching experience data")
                setStatus("idle")
                return
            }
            setExperienceData(data.result)
        } catch (error) {
            console.log("failed fetching experience data")
            return
        } finally{
            setStatus("idle")
        }
     
    }
    
    useEffect( () => {
        fetchData()
    },[])

    if(status === "loading"){
        return(
            <Loader className="h-[10vh]"/>
        )
    }

    return (
        <View className="mt-8 px-4 mb-4">
            <H1 className="text-defaultGreen">Experience</H1>
            {experienceData && <ExperienceCard experienceData={experienceData}/>}
        </View>
    )
}