import { ExperienceTypes } from '@/components/About/Experience'
import { baseUrl, token } from '@/lib/constants'
import { responseMessagesType } from '@/lib/types'
import axios from 'axios'

type fetchExperienceDataTypes = {
    messages: responseMessagesType
    result: ExperienceTypes[]
}


export const fetchExperienceData = async (): Promise<fetchExperienceDataTypes | undefined> => {
    try {
        const response = await axios.get(`${baseUrl}/PortfolioBackend/fetchExperiences`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        console.log("Error: ", error)
        return
    }
}


