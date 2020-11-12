const Nunjucks = require('nunjucks');
const CleanCSS = require("clean-css");
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

module.exports = function(eleventyConf) {
  const nunjucksEnv = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(['css', '_includes/partials']),
  );

  eleventyConf.addPassthroughCopy('img');
  eleventyConf.addPassthroughCopy('js');
  eleventyConf.addPassthroughCopy({ 'public/favicon.ico': 'favicon.ico' });
  eleventyConf.addPassthroughCopy({ 'public/manifest.json': 'manifest.json' });
  eleventyConf.addPassthroughCopy({ 'public/cgi-bin/currentversion.cgi': 'cgi-bin/currentversion.cgi' });

  eleventyConf.setLibrary('njk', nunjucksEnv);

  eleventyConf.addFilter('cssmin', function(css) {
    const result = postcss([autoprefixer]).process(css);
    return new CleanCSS({}).minify(result.css).styles;
  });

  return {
    dir: {
      input: '_includes',
      output: 'docs',
    }
  }
}
