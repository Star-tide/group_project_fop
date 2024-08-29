import axios from "axios"

//check if UID == 1. If true, send PUT to make user an instructor. 
export const confirmUser = async () => {
    try {
        const response = await axios.get("https://our-api")
        return response.data
    }
    catch (error) {
        console.log("Failed to fetch user data", error)
        return null
    }
}