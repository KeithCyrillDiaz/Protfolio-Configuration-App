import { Href, Link } from "expo-router";
import React from "react";
import { View } from "react-native";




type MenuButtonTypes = {

    children: React.ReactNode;
    pathTo: Href<string | object>;
    focus: boolean;
    className?: string;
}

const MenuButton: React.FC<MenuButtonTypes> = ({children, focus, className, pathTo}) => {
   return (
    <Link className={`${className} text-white text-[15px] ${focus ? "border-b-2 border-b-defaultGreen text-defaultGreen ": ""}`} href={pathTo}>{children}</Link>
   )
}



type ButtonTypes = {
    title: ButtonLabels,
    pathTo: Href<string | object>;
}

export const Menu: React.FC<{currentPage: ButtonLabels}> = ({currentPage}) => {

    const Buttons: ButtonTypes[] = [
        {
            title: "Home",
            pathTo: "./",
        }
    ]

    return (
        <View>
            {Buttons.map((button, index) => {
                const {title, pathTo} = button
                return (
                    <MenuButton pathTo={pathTo} focus={currentPage === title} >{title}</MenuButton>
                )
            })}
        </View>
    )
}