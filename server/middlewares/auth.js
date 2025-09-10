// import jwt from 'jsonwebtoken';

// const authUser = async(req, res, next) => {
//     const token = req.headers.token;
//     if (!token) {
//         return res.json({success: false, message: 'Not Authorized Login Again'})
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.user = { id: token_decode.id }; 
//         // if (token_decode.id) {
//         //     req.body.userId = token_decode.id;
//         // }else{
//         //     return res.json({success: false, message: 'Not Authorized Login Again'});
//         // }

//         next();

//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:error.message})
//     }
// }

// export default authUser;

// middlewares/auth.js
import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const token = req.headers.token; // frontend sends { headers: { token } }

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized, Login Again' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };   // <-- attach decoded user id
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Invalid token' });
    }
};

export default authUser;

