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
    }
  }
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer