import { themeColor } from "@/styles/styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    title: string; 
    onPress: () => void;
    className?: string;
    color?: string;
    width?: number;
    paddingVertical? : number
    rounded?: number
}

export const Button: React.FC<ButtonProps> = ({
    title, 
    onPress, 
    className,
    color,
    width,
    paddingVertical,
    rounded
}) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color ?? themeColor.defaultGreen,
            width: width ?? "30%",
            paddingVertical: paddingVertical ?? 12,
            borderRadius: rounded ?? 7
        }}
        >
            <Text className={`${color === themeColor.defaultGreen ? " text-black " : "text-white"} font-montserratSemiBold text-[1.7vh]`}>{title}</Text>
        </TouchableOpacity>
    )
}