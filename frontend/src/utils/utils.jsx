import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const createCourse = async (formData) => {
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
        const response = await api.post("course/create/", formData)
        if(response.status == 201) {
         return true
        }
    } catch(error) {
        return error, "Failed to Create Course"
    }
};

export const deleteCourse = async (id) => {
    try {
        const response = await api.delete("course/create/", 
            {
                "pk": id
            }
        )
        if(response == 204) {
            return true
        }
    } catch(error) {
        return error, "Failed to delete course"
    }
}
