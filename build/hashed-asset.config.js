const hash = process.env.NODE_ENV === 'production' ? '[contenthash]' : '[hash]';

module.exports.jsFilename = `assets/[name]-${hash}.js`;
module.exports.cssFilename = `assets/[name]-${hash}.css`;
module.exports.fontFilename = `assets/fonts/[name]-${hash}.[ext]`;
