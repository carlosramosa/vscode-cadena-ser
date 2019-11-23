const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {

	let cadenaSer = vscode.commands.registerCommand('extension.cadena-ser', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://play.cadenaser.com/widget/audio/cadena_ser'));
	});

  context.subscriptions.push(cadenaSer);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
