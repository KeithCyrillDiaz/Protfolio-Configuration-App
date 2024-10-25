import { View, Text } from "react-native";

type ContainerProps = {
    children: React.ReactNode
}
export const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <View className="bg-defaultBlack flex pt-[7%] px-2 h-full">
            {children}
        </View>
    )
}