let figlet = require('figlet');


figlet.text('intocode', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Самсин');
        console.dir(err);
        return;
    }
    console.log(data);
});