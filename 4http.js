const http = require('Node:http')

const server = http.createServer((request,response)=>{
    if(request.url === '/') {
        response.end('<h1>Hello World</h1>')
    } else if(request.url === '/about'){
        response.end('<h1>Welcome to the about page</h1>')
    }
} )

server.listen(1000,()=>{
    console.log('Server is running on port http://localhost:5500')
})