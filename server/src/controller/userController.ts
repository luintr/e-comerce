import asyncHandler from "../middleware/asyncHandler";
import User from "../model/userModel";

// @desc      Auth user & get Token
// @route     POST /api/users/login
// @access    Public
export const authUser = asyncHandler(async (req: any, res: any) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc      Register User
// @route     POST /api/users
// @access    Public
export const registerUser = asyncHandler(async (req: any, res: any) => {
  res.send('register user')
})

// @desc      Logout User / clear cookie
// @route     POST /api/users/logout
// @access    Private
export const logoutUser = asyncHandler(async (req: any, res: any) => {
  res.send('logout user')
})

// @desc      Get User Profile
// @route     GET /api/users/profile
// @access    Public
export const getUserProfile = asyncHandler(async (req: any, res: any) => {
  res.send('get user profile')
})

// @desc      Update User Profile
// @route     PUT /api/users/profile
// @access    Private
export const updateUserProfile = asyncHandler(async (req: any, res: any) => {
  res.send('update user profile')
})

// @desc      Get Users
// @route     GET /api/users
// @access    Private/Admin
export const getUsers = asyncHandler(async (req: any, res: any) => {
  res.send('get users')
})

// @desc      Delete Users
// @route     DELETE /api/users/:id
// @access    Private/Admin
export const deleteUser = asyncHandler(async (req: any, res: any) => {
  res.send('delete user')
})

// @desc      Get Users by ID
// @route     GET /api/users/:id
// @access    Private/Admin
export const getUserById = asyncHandler(async (req: any, res: any) => {
  res.send('get user id')
})

// @desc      Update User
// @route     POST /api/users/:id
// @access    Private/Admin
export const updateUser = asyncHandler(async (req: any, res: any) => {
  res.send('update user')
})