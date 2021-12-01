const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");

const config = defaults.__get__("config");
console.log(JSON.stringify(config, null, 2));
config.optimization.minimizer[0].options.terserOptions.compress.keep_classnames = true;
config.optimization.minimizer[0].options.terserOptions.compress.keep_fnames = true;

/**
 * Do not disable component profiling in production, for a better learning experience
 * @link https://kentcdodds.com/blog/profile-a-react-app-for-performance#update-the-webpack-config-for-production-profiling
 */
 config.resolve.alias['react-dom$'] = 'react-dom/profiling';
 config.resolve.alias['scheduler/tracing'] = 'scheduler/tracing-profiling';