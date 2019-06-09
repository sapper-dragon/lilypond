const exec = require('util').promisify(require('child_process').exec)
import { yellowBright, red } from 'ansi-colors'
import { refresh } from '../trimmings/tools'

export const change = async({ config, filepath }) => {
	try {
		const { input, filter, outputStatic } = config.lilypond
		const output = filepath.replace(filter, '')
		const command = `lilypond --output=./${outputStatic}/${output} ./${input}/${filepath}`
		const { stdout } = await exec(command)
		if (stdout) { console.log(stdout) }
		await refresh()
		console.log('~>', yellowBright('Finished converting LilyPond file:'), filepath)
	} catch (error) {
		console.error(red('Error:'))
		console.error(error)
	}
	console.log()
}

export const remove = async({ config, filepath }) => {
	try {
		const { filter, outputStatic } = config.lilypond
		const path = `${outputStatic}/${filepath.replace(filter, '.pdf')}`
		const { stdout } = await exec(`rm -f ${path}`)
		if (stdout) { console.log(stdout) }
		console.log('~>', yellowBright('Removing pdf file:'), path)
	} catch (error) {
		console.error(red('Error:'))
		console.error(error)
	}
	console.log()
}
