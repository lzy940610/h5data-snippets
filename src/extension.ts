// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { PAGE } from './templates/hoc';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const hoc = vscode.commands.registerCommand('extension.hoc', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const lineNum = 0;
			const tpl = PAGE;

			editor.edit((editBuilder) => {
				
				editBuilder.insert(new vscode.Position(lineNum, 0), tpl) // 插入
				setTimeout(() => {
					editor.document.save()
				}, 200)
			})

		} else {
			vscode.window.showErrorMessage('请在文件中执行命令～');
		}

	});

	context.subscriptions.push(hoc);
}



