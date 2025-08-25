import { Locale } from "./Locale";
import { Logger } from "./Logger/Logger";

export class DependencyManager {

	private static dependecyGraph: Map<string, Set<string>> = new Map();

	constructor() {

	}

	public async topologicalSort(graph: Map<string, Set<string>>, startNode: string): Promise<string[]> {
        const visited = new Set<string>();
		const stack: string[] = [];
		const path: string[] = [];
		DependencyManager.dependecyGraph.set(startNode, graph.get(startNode)!);

        async function visit(node: string) {
			path.push(node);
			if (visited.has(node)) {
				// Logger.error(Locale.t("Finded cycle dependency %s", path.join(" -> ")));
				path.pop();
				return;
			}
			if (visited.has(node)) {
				return;
			}
            visited.add(node);

			const dependencies = DependencyManager.dependecyGraph.get(node) || new Set<string>();
			for (const neighbor of dependencies) {
				visit(neighbor);
			}

            stack.push(node);
			path.pop();
        }

		await visit(startNode);

		stack.pop();
        return stack.reverse();
    }

}