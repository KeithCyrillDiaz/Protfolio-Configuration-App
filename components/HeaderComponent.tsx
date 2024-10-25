
import { View, Linking, } from "react-native";
import { FacebookIcon, GithubIcon, LinkedInIcon, MenuBurgerIcon } from "./icons";
import { SocialsUrl } from "@/lib/constants";
import React, {useState} from "react";
import { Menu } from "./Menu";


export const HeaderComponent: React.FC<{currentPage: ButtonLabels}> = ({currentPage}) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isOutAnimation, setIsOutAnimation] = useState<boolean>(false)

    return(
        <>
        {isMenuOpen && 
                <Menu onPress={() => setIsMenuOpen(!isMenuOpen)} currentPage={currentPage} />
        }
        <View className="flex flex-row gap-7 items-center justify-between text-white pt-6 py-2 border-b-4 border-b-defaultGreen mx-4 px-2">
   
            <MenuBurgerIcon size={37} onPress={() => setIsMenuOpen(!isMenuOpen)}/>
          
            <View className="flex flex-row gap-2 items-center">
                <FacebookIcon onPress={() => Linking.openURL(SocialsUrl.facebook)}/>
                <GithubIcon onPress={() => Linking.openURL(SocialsUrl.gitHub)}/>
                <LinkedInIcon onPress={() => Linking.openURL(SocialsUrl.linkedIn)}/>
            </View>
        </View>
        </>
    )
}