# @sapper-dragon/lilypond

Decorate your [Sapper](https://sapper.svelte.dev/) project with LilyPond.

`@sapper-dragon/lilypond` utilizes [LilyPond](http://lilypond.org/) under the surface, a tool for transforming `*.ly` LilyPond code files to music engraving and MIDI files.

## Installation

```
npm install @sapper-dragon/lilypond --save-dev
# or
yarn add @sapper-dragon/lilypond --dev
```

## Usage

This project requires the [@sapper-dragon/trimmings](https://github.com/sapper-dragon/trimmings) lib, so look there first for instructions, then come back. 💫

### LilyPond CLI

This package requires the cli tools to be installed. 


Instructions can be found here for [Unix](http://lilypond.org/doc/v2.18/Documentation/web/unix), [MacOS X](http://lilypond.org/doc/v2.18/Documentation/web/macos-x), and [Windows](http://lilypond.org/doc/v2.18/Documentation/web/windows).

After installing, `@sapper-dragon/lilypond` will watch for `*.ly` file changes in `src/trimmings/lilypond`, call the lilypond processor, and save the transformed music files (`*.pdf` and `*.midi) to `static/music`.

### Config

You can place a `trimmings.config.js` file in the root of your project to set configutations. These are the defaults:

```js
export default {
	lilypond: {
		input: 'src/trimmings/lilypond', // path to watch *.ly files
		filter: /\.ly$/, // pattern for files to watch
		outputStatic: 'static/music', // output path
	},
	// ... additional settings from other @sapper-dragon packages...
}
```
