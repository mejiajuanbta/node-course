function handleRequest(req, res) {
    const url = req.url;
    console.log(url);

    if (url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Welcome Page</title>
                </head>
                <body>
                    <h3>Welcome Juan Mejia</h3>
                    <form action="/create-user" method="POST">
                        <input name="username" type="text" />
                        <input name="createUser" type="submit" value="Create User" />
                    </form>
                </body>
            </html>
        `);
    } else if (url === '/users') {
        res.write(`
            <html>
                <head>
                    <title>Users list</title>
                </head>
                <body>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                    </ul>
                </body>
            </html>
        `);
    } else if (url === '/create-user') {
        const data = [];
        req.on('data', chunk => {
            data.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(data).toString();
            const users = parsedBody.split('=');
        });
    }
    res.end();
}

module.exports = handleRequest;