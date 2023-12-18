import { createSlice } from '@reduxjs/toolkit'

const localExist = typeof localStorage !== 'undefined';
const storedUserInfo = localExist && localStorage.getItem('userInfo');
const initialUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

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
    },
    logout: (state, action) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    }
  }
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer