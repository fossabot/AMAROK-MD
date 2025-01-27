const { getAntiLink, command, genButtonMessage, setAntiLink } = require('../lib/')

command(
	{
		pattern: 'antilink ?(.*)',
		fromMe: true,
		desc: 'to on off antiLink',
		type: 'group',
		onlyGroup: true,
	},
	async (message, match) => {
		const antilink = await getAntiLink(message.jid)
		if (!match) {
			const onOrOff = antilink.enabled ? 'off' : 'on'
			const button = await genButtonMessage(
				[
					{ id: 'antilink info', text: 'INFO' },
					{ id: `antilink ${onOrOff}`, text: onOrOff.toUpperCase() },
				],
				'Example\nhttps://github.com/Diegoson/AMAROK-MD/antilink',
				'Antilink'
			)
			return await message.send(button, {}, 'button')
			// return await message.send(
			// 	await genHydratedButtons(
			// 		[
			// 			{
			// 				urlButton: {
			// 					text: 'Example',
			// 					url: 'https://github.com/Diegoson/AMAROK-MD/antilink',
			// 				},
			// 			},
			// 			{
			// 				button: {
			// 					id: `antilink ${antilink.enabled ? 'off' : 'on'}`,
			// 					text: antilink.enabled ? 'OFF' : 'ON',
			// 				},
			// 			},
			// 			{ button: { id: 'antilink info', text: 'INFO' } },
			// 		],
			// 		'AntiLink'
			// 	),
			// 	{},
			// 	'template'
			// )
		}
		if (match == 'on' || match == 'off') {
			if (match == 'off' && !antilink)
				return await message.send('_AntiLink is not enabled._')
			await setAntiLink(message.jid, match == 'on')
			return await message.send(
				`_AntiLink ${match == 'on' ? 'Enabled' : 'Disabled.'}_`
			)
		}
		if (match == 'info')
			return await message.send(
				`*AntiLink :* ${antilink.enabled ? 'on' : 'off'}\n*AllowedUrl :* ${
					antilink.allowedUrls
				}\n*Action :* ${antilink.action}`
			)
		if (match.startsWith('action/')) {
			await setAntiLink(message.jid, match)
			const action = match.replace('action/', '')
			if (!['warn', 'kick', 'null'].includes(action))
				return await message.send('*Invalid action*')
			return await message.send(`_AntiLink action updated as ${action}_`)
		}
		await setAntiLink(message.jid, match)
		return await message.send(`_AntiLink allowed urls are ${match}_`)
	}
)
