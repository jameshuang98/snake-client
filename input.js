w = "Move: up"
a = "Move: left"
s = "Move: down"
d = "Move: right"

// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin

const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function(key) {
    if (key === '\u0003') {
        process.exit();
    } else if (key === 'w') {
        connection.write(w)
    } else if (key === 'a') {
        connection.write(a)
    } else if (key === 's') {
        connection.write(s)
    } else if (key === 'd') {
        connection.write(d)
    }
};

// setupInput();

module.exports = {
    setupInput
}