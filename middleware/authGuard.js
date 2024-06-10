const authGuard = (req, res,next) => {


    // check incoming data
    console.log(req.headers)
    //1. Get auth headers (content type, authorization...)
    // Get 'authrization'
    // if not dound stop the process(res)
    // autorization format : 'Bearer tokensdasd'
    // get only token by splitting by space (0- Bearer,1-token)
    // if token not found or mismatch(stop the proces,res)
    // verify the token
    // if verified, next
    //not : not authenticated


}