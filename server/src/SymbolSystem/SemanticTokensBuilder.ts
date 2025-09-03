import { SemanticTokensBuilder as LSPSemanticTokensBuilder, SemanticTokenModifiers } from "vscode-languageserver";
import { SemanticToken } from "./SemanticToken";

export class SemanticTokensBuilder {
	private builder: LSPSemanticTokensBuilder = new LSPSemanticTokensBuilder();

	push(token: SemanticToken) {
		let modifierBits = 0;
        for (const modifier of token.tokenModifiers) {
            if (modifier !== -1) {
                modifierBits |= (1 << modifier);
            }
        }

        return this.builder.push(token.line, token.char, token.length, token.tokenType, modifierBits);
	}

	build() {
		return this.builder.build();
	}
}