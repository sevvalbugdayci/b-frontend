import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { loginRequest , getProfile } from "../../services/authService";


interface AuthState {
    user : {
        firstName : string,
        lastName : string,
        email : string,
    } | null ;
    token : string | null,
    loading : boolean,
    error : string | null;
}


const initialState : AuthState = {
    user : null,
    token : null,
    loading : false,
    error : null
}

export const loginUser = createAsyncThunk("auth/login", async({email,password}:{email:string;password:string},thunkAPI) => {
    try {
        const response = await loginRequest(email,password);
        console.log("login res",response);
        const token = response?.data?.data?.token || response?.token || response?.data?.token;
        console.log("gelen token",token)
        const profile = await getProfile();
        console.log("giden token",token)
        return {token,profile:profile.data.profileInfo}
    } catch (error: unknown) {
        if (error instanceof Error) {
            return thunkAPI.rejectWithValue(error.message || "Login Failed!");
        }
    
        if (typeof error === "object" && error !== null && "response" in error) {
            const apiError = error as { response?: { data?: { message?: string } } };
            return thunkAPI.rejectWithValue(apiError.response?.data?.message || "Login Failed!");
        }
    
        return thunkAPI.rejectWithValue("An unknown error occurred!");
    }
})

 

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        logout:(state) => {
            state.user = null;
            state.token = null;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
         .addCase(loginUser.pending,(state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action: PayloadAction<{token: string; profile: {firstName: string; lastName: string; email: string}}>) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.profile;
          })
         .addCase(loginUser.rejected, (state) => {
            state.loading = false;
            state.error = "Login Failed!";
          });
    },
});


export const {logout} = authSlice.actions;
export default authSlice.reducer;