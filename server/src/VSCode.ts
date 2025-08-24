import { LSPConnection } from "./types";

export namespace VSCode {
	export enum NotificationType {
		Error = 1,
		Warn = 2,
		Info = 3
	}

	export function sendNotification(connection: LSPConnection, type: NotificationType, message: string) {
		connection.sendNotification('window/showMessage', {
			type: type,
			message: message
		})
	}
}