const exec = require('util').promisify(require('child_process').exec)
import { yellow } from 'ansi-colors'
import { refresh } from '../trimmings/tools'

export const change = async({ config, filepath }) => {
	try {
		const output = filepath.replace(/\.ly$/, '')
		const command = `lilypond --output=./${config.lilypond.input}/${output} ./${config.lilypond.input}/${filepath}`
		const { stdout } = await exec(command)
		if (stdout) { console.log(stdout) }
		await refresh()
		console.log('~>', yellow('Finished converting LilyPond file:'), filepath)
		console.log()
	} catch (error) {
		console.error(`error: ${error}`)
	}
}
