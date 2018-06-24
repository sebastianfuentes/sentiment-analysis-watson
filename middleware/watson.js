var ibm = require("watson-developer-cloud/tone-analyzer/v3");

var analyzer = new ibm({
    version: process.env.IBM_VERSION,
    url: process.env.IBM_URL,
    username: process.env.IBM_USERNAME,
    password: process.env.IBM_PASSWORD
});

exports.analyze = (req, res, next) => {
    analyzer.tone({
        'tone_input': {
            // 'text': "¿Qué falta para cerrar la brecha laboral entre los 'millennials' y las empresas?"
            'text': req.translation
        },
        'accept_language': 'es',
        'content_type': 'application/json'
    }, function(error, analysis) {
        if (error) {
            console.log(error);
        } else {
            req.analysis = analysis.document_tone
        }
        next();
    });
};