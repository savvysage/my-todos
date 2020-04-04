var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var todos = ['Create a website', 'Develop an app', 'Get a job', 'Make money', 'Invest in Bitcoin', 'Trade crypto', 'Go shopping'];

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('todo', {todos: todos});
    });

    app.post('/', urlencodedParser, function(req, res) {
        todos.push(req.body.todo);
        res.json(todos);
    });

    app.delete('/', urlencodedParser, function(req, res) {
        todos.splice(req.body.todoKey, 1);
        res.json(todos);
    });
};