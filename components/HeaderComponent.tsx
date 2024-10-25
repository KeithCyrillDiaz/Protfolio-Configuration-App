import { Href, Link } from "expo-router";
import { View, Text } from "react-native";
import { MenuBurger } from "./MenuBurger";


type LinkComponentProps = {
    children: React.ReactNode;
    className?: string;
    pathTo: Href<string | object>;
    focus: boolean;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
    children,
    className,
    pathTo,
    focus
}) => {
    return (
        <Link className={`${className} text-white text-[15px] ${focus ? "border-b-2 border-b-defaultGreen text-defaultGreen ": ""}`} href={pathTo}>{children}</Link>
    )
}



export const HeaderComponent: React.FC<{currentPage: string}> = ({currentPage}) => {
    return(
        <View className="flex flex-row gap-7 text-white py-4 border-b-4 border-b-defaultGreen mx-5 px-4">
           <MenuBurger/>
        </View>
    )
}