import React from "react";
import { Text } from "react-native";

type H1Props = {
    children: React.ReactNode;
    className?: string
    align?: "center" | "justify"
}

export const H1: React.FC<H1Props> = ({children, className, align}) => {
    return(
        <Text 
        style={{textAlign: align}}
        className={`${className ?? "text-white"} font-montserratExtraBold text-[3vh] `}>{children}</Text>
    )
}

export const H2: React.FC<H1Props> = ({children, className, align}) => {
    return(
        <Text 
        style={{
            fontSize: 12,
            textAlign: align
        }}
        className={`${className ?? "text-white"} text-[12px] font-montserratExtraBold`}>{children}</Text>
    )
}