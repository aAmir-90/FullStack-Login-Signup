import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Check your Input Fields",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).json({
        success: false,
        message: "User already exist",
      });
    }
    const response = await User({ name, email, password }).save();
    return res.status(200).json({
      success: true,
      message: "User successfully created",
      response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Check Input Fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    res.status(200).json({
      success: true,
      message: "User Login Successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User get successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const updateData = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!response) {
      return res.status(401).json({
        success: false,
        message: "Can not update user",
      });
    }
    res.status(200).json({
      success: true,
      message: "User can update successfully",
      response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(401).json({
        success: false,
        message: "Can not delete user",
      });
    }
    res.status(200).json({
      success: true,
      message: "User can delete successfully",
      deletedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};
