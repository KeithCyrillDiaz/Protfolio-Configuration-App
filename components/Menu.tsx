import { Href, Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AboutIcon, HomeIcon, ProjectsIcon } from "./icons";




type MenuButtonTypes = {

    children: React.ReactNode;
    pathTo: Href<string | object>;
    focus: boolean;
    className?: string;
}

const MenuButton: React.FC<MenuButtonTypes> = ({children, focus, className, pathTo}) => {
   return (
    <Link className={`${className} text-[2vh] font-montserratSemiBold ${focus ? "text-defaultGreen": "text-white"}`} href={pathTo}>{children}</Link>
   )
}



type ButtonTypes = {
    title: ButtonLabels,
    pathTo: Href<string | object>;
    IconComponent: React.ComponentType<any>;
  
}

type MenuProps = {
    currentPage: ButtonLabels;  
    className?: string;
    onPress: () => void;
}


export const Menu: React.FC<MenuProps> = ({
    currentPage, 
    className,
    onPress
}) => {

    const Buttons: ButtonTypes[] = [
        {
            title: "Home",
            pathTo: "/",
            IconComponent: HomeIcon
        },
        {
            title: "About",
            pathTo: "/About",
            IconComponent: AboutIcon
        },
        {
            title: "Projects",
            pathTo: "/Project",
            IconComponent: ProjectsIcon
        },
    ]

    return (
        <View className={`${className} bg-defaultGray w-[52%] flex h-full absolute z-10 pt-[7vh]`}>
            <TouchableOpacity onPress={onPress}>
                <Text className="text-white font-montserratExtraBold text-[2.8vh] border-b-4 border-defaultGreen pb-2 mx-4">Menu</Text>
            </TouchableOpacity>
         
            <View className="my-4">
                {Buttons.map((button, index) => {
                    const {title, pathTo, IconComponent} = button
                    return (
                       <View key={index} className={`${currentPage === title ? "bg-defaultDarkerGray " : ""} flex flex-row items-center gap-2 py-[1.7vh] w-full px-4`}>
                         <IconComponent/>
                         <MenuButton pathTo={pathTo} focus={currentPage === title} >{title}</MenuButton>
                       </View>

                    )
                })}
            </View>
        </View>
    )
}
