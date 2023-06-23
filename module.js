const os = require('os')

let osFunctions = {
    userInfo: os.userInfo(),
    platform: os.platform(),
    release: os.release,
    totalMemory: os.totalmem,
    freeMemory: os.freemem,
    cpu: os.cpus,
    networkInterfaces: os.networkInterfaces,
    version: os.version,
    type: os.type,

}

console.log(osFunctions)