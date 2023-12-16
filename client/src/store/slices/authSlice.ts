import { createSlice } from '@reduxjs/toolkit'

const storedUserInfo = localStorage.getItem('userInfo');
const initialUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};

const initialState = {
  userInfo: initialUserInfo
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    }
  }
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer