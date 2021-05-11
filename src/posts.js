let posts = [
    {
        "id" : 1,
        "title" : "Curso fullstack",
        "body": "..."
    },
    {
        "id" : 2,
        "title" : "Curso mobile",
        "body": "..."
    },
    {
        "id" : 3,
        "title" : "Curso big data",
        "body": "..."
    }
]

const http = require('http')

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // /posts/1
    if ( req.url.startsWith('/posts/') ) {
        let id = req.url.replace('/posts/', '')

        return res.end( JSON.stringify(posts[id-1]) )
    }

    res.end( JSON.stringify(posts) )

}).listen(3001)
