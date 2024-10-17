import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.insertDateTime', async () => {
        const answer = await vscode.window.showInputBox({ prompt: 'Enter the timezone offset (in hours):' });
        
        if (answer !== undefined) {
            const now = new Date();
            const curTimeZoneOffset = now.getTimezoneOffset() / 60;
            const wanTimeZone = Number(answer);

            // Рассчитываем новое время
            const newTime = new Date(now.getTime() + (wanTimeZone + curTimeZoneOffset) * 60 * 1000 * 60);
            const dateTimeString = newTime.toLocaleString();

            const editor = vscode.window.activeTextEditor;
            if (editor) {
                editor.edit(editBuilder => {
                    editBuilder.insert(editor.selection.active, dateTimeString);
                });
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
