const jwt = require('jsonwebtoken')

function generateAccessToken(payload, tokenExpiry) {
    /**
     * This function is used to sign a new token using the passed payload and tokenExpiry. The token is calculated based on the SECRET_ACCESS_TOKEN present in the .env file
     */
    // Default token expiry is 30 minutes
    return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, { expiresIn: tokenExpiry })
}

function verifyAccessToken(req, res, next) {
    
    /**
     * This function is used to verify the jwt-auth-token
     */

    // Using the authorization header for accessing the token
    const token = req.headers['authorization']
    
    // If Bearer is used then we use the split method 
    // ['Bearer', 'jwt-auth-token']
    // const token = authHeader && authHeader.split(' ')[1]
    
    if (token) {
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, data) => {
            if (err) {
                // Token is provided but verification fails
                return res.sendStatus(403).json({msg:"No Valid Token Provided"})
                // Forbidden
            }
            else{
                // Token is provided and is verified
                // Then we set a new variable (payload) in req.body to the 'data' stored inside the jwt-auth-token
                req.body.payload = data
                // Now calling the next function
                next()
            }
        })
    }
    else{
        // If token is not accessible or not provided
        return res.status(401).json({msg:"No Valid Token Provided"})
        // Unauthorized
        
    }
}

module.exports = {
    GENERATETOKEN: generateAccessToken,
    VERIFYTOKEN: verifyAccessToken
}