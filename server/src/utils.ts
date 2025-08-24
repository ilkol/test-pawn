import { LSPConnection } from "./types";
import { VSCode } from "./VSCode";

export function sendNotification(connection: LSPConnection, type: VSCode.NotificationType, message: string) {
	VSCode.sendNotification(connection, type, message);
}