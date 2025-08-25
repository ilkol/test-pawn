import { Locale } from "./Locale";
import { Logger } from "./Logger/Logger";

export class DependencyManager {
	constructor() {

	}

	public async topologicalSort(graph: Map<string, Set<string>>, startNode: string): Promise<string[]> {
        const visited = new Set<string>();
		// const recStack = new Set<string>();
		const stack: string[] = [];

        async function visit(node: string) {
			// if (recStack.has(node)) {
			// 	// Logger.error(Locale.t('Cyclic dependency detected: %s', node));
			// 	throw new Error(Locale.t('Cyclic dependency detected: %s', node));
			// }
			if (visited.has(node)) {
				return;
			}
            visited.add(node);
			// recStack.add(node);

			const dependencies = graph.get(node) || new Set<string>();
			for (const neighbor of dependencies) {
				if (visited.has(neighbor)) {
					Logger.error(Locale.t("Finded cycle dependency: {0} -> {1}", node, neighbor));
					// window.showErrorMessage(l10n.t("Finded cycle dependency: {0} -> {1}", node, neighbor));
					// throw new Error(`Циклическая зависимость обнаружена: ${node} -> ${neighbor}`);
				}
				if (!stack.includes(neighbor))
				{
					await visit(neighbor);
				}
				// visit(neighbor);
			}

			// recStack.delete(node);
            stack.push(node);
        }

		await visit(startNode);

		stack.pop();
        return stack.reverse(); // Разворачиваем стек для получения топологического порядка
    }

}