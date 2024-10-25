import * as Font from 'expo-font';

export const getFonts = async () => {

    await Font.loadAsync({
        'Montserrat-SemiBold': require("../assets/fonts/Montserrat-SemiBold.ttf"),
        'Montserrat-Regular': require("../assets/fonts/Montserrat-Regular.ttf"),
        'Montserrat-Bold': require("../assets/fonts/Montserrat-Bold.ttf"),
        'Montserrat-ExtraBold': require("../assets/fonts/Montserrat-ExtraBold.ttf"),
        'Montserrat-ExtraLight': require("../assets/fonts/Montserrat-ExtraLight.ttf"),
      
    })
};
