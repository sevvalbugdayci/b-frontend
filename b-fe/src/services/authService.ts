import axios from "axios";

const API_URL = "https://96318a87-0588-4da5-9843-b3d7919f1782.mock.pstmn.io";



export const loginRequest = async(email:string , password : string) => {
    const response = await axios.post(`${API_URL}/sign-in-request`,{email,password});
    return response.data;
};


export const getProfile = async () => {
  //console.log("Mock Profile Kullanılıyor. Gerçek API çalışmıyor!");

  return {
    success: true,
    data: {
      _id: "1b51577d3548e481f8855106b14ea31f",
      profileInfo: {
        firstName: "Test",
        lastName: "User",
        birthDate: "1994-10-26",
        email: "test@mock.com",
        passwordHash: "mockpassword"
      }
    }
  };
};

// export const getProfile = async(token:string) => {
//     console.log("Gönderilen Token",token);
//     const response = await axios.get(`${API_URL}/profile`,{headers:{"x-auth-token" : token}});
//     return response.data
// };