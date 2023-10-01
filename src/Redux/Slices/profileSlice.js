import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name:"profileSlice",
  initialState:{
    profileId:null,
  },
  reducers:{
    setProfileId: (state , action) => {
      state.profileId = action.payload
    }
  }
})

export const {setProfileId} = profileSlice.actions
export default profileSlice.reducer