import * as Font from 'expo-font';

type fontSizesTypes = 'Regular' | 'Bold' | 'ExtraBold' | 'ExtraLight';

const fontSizes: fontSizesTypes[] = ['Regular', 'Bold', 'ExtraBold', 'ExtraLight'];

export const getFonts = async () => {

    await Font.loadAsync({
        'Montserrat-Regular': require("../assets/fonts/Montserrat-Regular.ttf"),
        'Montserrat-Bold': require("../assets/fonts/Montserrat-Bold.ttf"),
        'Montserrat-ExtraBold': require("../assets/fonts/Montserrat-ExtraBold.ttf"),
        'Montserrat-ExtraLight': require("../assets/fonts/Montserrat-ExtraLight.ttf"),

    })

    const fontMap = fontSizes.map((weight) => {
        return {[`Montserrat-${weight}`]: `../assets/fonts/Montserrat-${weight}.ttf`};
    });

    const fontMapPath = Object.assign({}, ...fontMap)
    console.log("fonts:", fontMapPath)


};