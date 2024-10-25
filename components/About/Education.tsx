import React from "react";
import { H1, H2 } from "../H_Tags";
import { Image, Text, View } from "react-native";
import { AboutDetails, imagesTypes } from "@/lib/constants";

const {course, GPA, school, images} = AboutDetails.EducationInformation

const ImageLabel: React.FC<{label: string[]}> = ({label}) => {
    return(
        <H2 align="center">
        {label.map((word, index) => {
            const isHighlightText = word === "Best Thesis" || word === "Cum Laude"
            return(
                <H2 
                key={index}
                align="center"
                className={`${isHighlightText ? "text-defaultGreen": "text-white"} text-center`}> 
                {word} </H2>
            )
        })}
        </H2>
    )
}

const RenderImages: React.FC<{data: imagesTypes[]}> = ({data}) => {
    return(
        <View 
        className="flex flex-wrap items-center">
            {data.map((item, index) => {
                const {uri, label} = item
    
                return (
                   <View key={index} className="flex flex-col my-4 items-center gap-2">
                        <Image
                            source={{uri: uri}}
                            height={200}
                            width={300}
                            style={{
                                borderRadius: 17
                            }}
                        />    
                        <ImageLabel label={label}/>
                   </View>
                )
            })}
        </View>
       
    )
}

export const Education: React.FC = () => {
    return(
        <View className="px-4">
            <H1 className="text-defaultGreen">Education</H1>
            <H2>{course}: GPA: <H2 className="text-defaultGreen">{GPA}</H2></H2>
            <H2>{school}</H2>
            <RenderImages data={images}/>
        </View>
    )
}