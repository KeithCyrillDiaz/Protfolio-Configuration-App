import { themeColor } from '@/styles/styles';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';



type IconTypes = {
    color?: string;
    size?: number;
    className?: string;
    onPress?: () => void;
}

export const ProjectsIcon: React.FC<IconTypes> = ({color, size, className, onPress}) => (
    <TouchableOpacity onPress={onPress}>
         <AntDesign 
         name="file1" 
         size={size ?? 24} 
         color={color ?? themeColor.defaultGreen}/>
    </TouchableOpacity>
   
)


export const AboutIcon: React.FC<IconTypes> = ({color, size, className, onPress}) => (
    <TouchableOpacity onPress={onPress}>
         <AntDesign 
         name="user" 
         size={size ?? 24} 
         color={color ?? themeColor.defaultGreen}/>
    </TouchableOpacity>
   
)

export const HomeIcon: React.FC<IconTypes> = ({color, size, className, onPress}) => (
    <TouchableOpacity onPress={onPress}>
         <Entypo
            className={`${className} ml-[-.7vh]`}
            name="home" 
            size={size ?? 24} 
            color={color ?? themeColor.defaultGreen}/>
    </TouchableOpacity>
   
)

export const MenuBurgerIcon: React.FC<IconTypes> = ({color, size, className, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <Entypo
        className={`${className} ml-[-.7vh]`}
        name="menu" 
        size={size ?? 24} 
        color={color ?? themeColor.defaultGreen}/>
    </TouchableOpacity>
   
)

export const FacebookIcon: React.FC<IconTypes> = ({color, size, className, onPress}) =>(
    <TouchableOpacity onPress={onPress}>
        <FontAwesome5 
        className={`${className}`}
        name="facebook" 
        size={size ?? 24} 
        color={color ?? themeColor.defaultGreen} 
        />
    </TouchableOpacity>
)

export const GithubIcon: React.FC<IconTypes> = ({color, size, className, onPress}) => (
   
    <TouchableOpacity onPress={onPress}>
        <AntDesign 
        className={`${className}`}
        name="github" 
        size={size ?? 24} 
        color={color ?? themeColor.defaultGreen} />
    </TouchableOpacity>
)
export const LinkedInIcon: React.FC<IconTypes> = ({color, size, className, onPress}) => (

    <TouchableOpacity onPress={onPress}>
        <AntDesign 
        className={`${className}`}
        name="linkedin-square" 
        size={size ?? 24} 
        color={color ?? themeColor.defaultGreen}  />
    </TouchableOpacity>
)