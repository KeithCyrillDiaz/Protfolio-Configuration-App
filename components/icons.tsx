import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';

type IconTypes = {
    color?: string;
    size?: number;
}

export const MenuBurgerIcon: React.FC<IconTypes> = ({color, size}) => (
    <Entypo name="menu" size={size ?? 24} color={color ?? "black"} />
)