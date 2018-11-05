function validateRequest(request){
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[a-zA-Z\d.]+$|^\*$/;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let messagePattern = /^[^<>\\&'"]*$/;
    
    if (validMethods.indexOf(request.method) === -1){
        throw Error("Invalid request header: Invalid Method");
    }
    
    if (request.uri === undefined || !uriPattern.test(request.uri)){
        throw Error("Invalid request header: Invalid URI");
    }
    
    if (validVersions.indexOf(request.version) === -1){
        throw Error("Invalid request header: Invalid Version");
    }
    
    if (request.message === undefined || !messagePattern.test(request.message)){
        throw Error("Invalid request header: Invalid Message");
    }
    
    return request;
}

const data = {
    method: 'GET'
};

console.log(validateRequest(data));
