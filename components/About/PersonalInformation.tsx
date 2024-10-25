import React from "react";
import { ProfilePicture } from "../Home/ProfilePicture";
import { AboutDetails } from "@/lib/constants";
import { Text, View } from "react-native";
import { H1 } from "../H_Tags";
import { EmailIcon, IconTypes, MapMarkerIcon, PhoneIcon } from "../icons";

const {myImage, fullName, selfIntroduction, intro2, contactNumber, email, address} = AboutDetails.PersonalInformation

type ParagraphProps = {
    children: React.ReactNode;
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className}) => {
    return(
        <Text className={`${className ?? "text-white"} font-montserratExtraLight text-[10vh]`}>{children}</Text>
    )
}

type iconLabels = "Contact Number" | "Email" | "Address"
type TextWithIconProps = {
    children: React.ReactNode; 
    icon: iconLabels;
}

type iconMaps = {
    [key in iconLabels]: React.ComponentType<IconTypes>
}

const TextWithIcon: React.FC<TextWithIconProps> = ({children, icon}) => {
    const icons: iconMaps = {
        "Contact Number": PhoneIcon, 
        "Email": EmailIcon,
        "Address": MapMarkerIcon,
    }

    const IconComponent = icons[icon]
    return(
        <View className="flex-row gap-2 items-center">
            {IconComponent && <IconComponent/>}
            <Text className="text-white">{children}</Text>
        </View>
    )
}

type contactType ={
    title: iconLabels; 
    data: string
}

const PersonalDetails: React.FC = () => {

    const contacts: contactType[] = [
        {
            title: "Contact Number",
            data: contactNumber,
        },
        {
            title: "Email",
            data: email,
        },
        {
            title: "Address",
            data: address,
        },
    ]

    return(
        <View className="px-4 my-4 gap-2">
           <H1 className="text-defaultGreen">{fullName}</H1>
           <Paragraph>
                {selfIntroduction.map((sentence, index) => {
                    const isHighlighted = sentence === "mobile " || sentence === "web ";
                    return (
                        <Paragraph key={index} className={isHighlighted ? "text-defaultGreen" : ""}>
                            {sentence}
                        </Paragraph>
                    );
                })}
            </Paragraph>
            {contacts.map((item, index) => {
                    const {title, data} = item
                return(
                    <TextWithIcon key={index} icon={title}>
                        {title}:
                        <Text className="font-montserratExtraLight"> {data}</Text>
                    </TextWithIcon>
                )
            })}
            <Paragraph>{intro2}</Paragraph>
        </View>
    )
}



export const PersonalInformation: React.FC = () => {

    return(
        <>
            <View 
            style={{marginTop: 17}}
            className="items-center">
                <ProfilePicture className="h-[40vh] w-[40vh]"  uri={myImage}/>
            </View>
            <PersonalDetails/>
        </>
       
    )
}