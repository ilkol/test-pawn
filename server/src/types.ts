import { _, _Connection } from 'vscode-languageserver';
import { InlineCompletionFeatureShape } from 'vscode-languageserver/lib/common/inlineCompletion.proposed';

export type LSPConnection = _Connection<_, _, _, _, _, _, InlineCompletionFeatureShape, _>;
