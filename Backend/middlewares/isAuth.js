import jwt from 'jsonwebtoken';

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - invalid token" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error in isAuth middleware:", error);
    return res.status(401).json({ message: "Unauthorized - invalid or expired token" });
  }
};

export default isAuth;




