(async () => {
    if(version_string === "Y2JB 1.0 by Gezine") {
        
        await log("setlogserver is not supported on Y2JB 1.0");    
        
    } else {
        // Change this to your server
        LOG_SERVER = 'http://192.168.1.180:8080/log';
        
        await log("Setting log server url to " + LOG_SERVER);    
        
        await checkLogServer();
        
        if(NETWORK_LOGGING) {
            await log("Successfully connected with log server");
        } else {
            await log("Failed to connect with log server");
        }
    }
    
})()