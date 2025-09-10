import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Invalid Email ,Please Enter Valid Email' })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: 'Password must be at least 8 characters long' });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: 'Email already registered' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({ success: true, token, user: { name: user.name } })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


// Login User

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }
        //compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid Credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            success: true,
            token,
            user: { name: user.name, email: user.email, creditBalance: user.creditBalance }
        });
        // if(!isMatch){
        //     const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
        //      res.json({success:false,token});

        // }else{
        //     return res.json({success:false,message:'Invalid Credentials'});
        // }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// const userCredits = async (req, res) => {
//     try {
//         // const userId = req.body.id;
//         const user = await userModel.findById(req.body.id);
//         if (!user) {
//             return res.json({ success: false, message: "User not found" });
//         }
//         res.json({success:true, credit: user.creditBalance, name:{name: user.name}});
//     } catch (error) {
//          console.log(error);
//         res.json({ success: false, message: error.message })
//     }
// }

const userCredits = async (req, res) => {
    try {
        // req.user is set by authUser middleware
        const userId = req.user.id;

        if (!userId) {
            return res.json({ success: false, message: "User ID missing in request" });
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            credits: user.creditBalance,
            user: { name: user.name, email: user.email }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { registerUser, loginUser, userCredits };