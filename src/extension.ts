import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.insertDateTime', () => {
		const now = new Date();
		const dateTimeString = now.toLocaleString();
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit(editBuilder => {
				editBuilder.insert(editor.selection.active, dateTimeString);
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
