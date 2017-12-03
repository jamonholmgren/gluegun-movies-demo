'use strict';

const { build } = require('gluegun');

/**
 * Create the cli and kick it off
 */
async function run (argv) {
  // create a CLI runtime
  const cli = build()
    .brand('movies')
    // Steve, this is where we're confusing Rollup.
    // We're using Gluegun to require all the other files dynamically at runtime.
    // Rollup can't follow this through.
    .src(`${__dirname}/../src`)
    .plugins('./node_modules', { matching: 'movies-*', hidden: true })
    .create();

  // and run it
  const context = await cli.run(argv);

  // send it back (for testing, mostly)
  return context
}

module.exports = run;
