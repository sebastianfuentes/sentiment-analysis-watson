var translator = require('google-translate')(process.env.GOOGLE_API_KEY);

exports.translate = (req, res, next) => {
    translator.translate(req.body.text, 'en', function(err, translation) {
        req.translation = translation.translatedText
        next();
    });
};