import { ArrayStruct } from "./memory/ArrayStruct";
import { ConditionStruct } from "./conditions/ConditionStruct";
import { EnumStruct } from "./memory/EnumStruct";
import { ReturnStruct } from "./functions/ReturnStruct";
import { SubProgrammStruct } from "./SubProgrammStruct";
import { VarStruct } from "./memory/VarStruct";
import { ForCycle } from "./cycle/ForCycle";
import { WhileCycle } from "./cycle/WhileCycle";
import { BinaryOperator } from "./operators/BinaryOperator";
import { UnarOperator } from "./operators/UnarOperator";
import { VarDefenitionStruct } from "./memory/VarDefenitionStruct";
import { SwitchStruct } from "./conditions/SwitchStruct";
import { ConstantStruct } from "./memory/ConstantStruct";
import { CallFunctionStruct } from "./functions/CallFunctionStruct";
import { PreprocessorStruct } from "./preprocessor/PreprocessorStruct";
import { Token } from "../parser/Token";
import { CaseStruct } from "./conditions/CaseStruct";
import { NegationStruct } from "./operators/NegationStruct";
import { HasTagStruct } from "../HasTagStruct";
import { TernarOperator } from "./operators/TernarOperator";
import { VarsDefenitionsStruct } from "./memory/VarsDefinitions";

export type TokenStruct = UnarOperator | BinaryOperator | ReturnStruct | EnumStruct | SubProgrammStruct |
ConditionStruct | ForCycle | WhileCycle | VarDefenitionStruct | SwitchStruct | StorageTokens | CallFunctionStruct 
| PreprocessorStruct | Token | CaseStruct | NegationStruct | TokensWithTags | TernarOperator | VarsDefenitionsStruct;

export type StorageTokens = ArrayStruct | ConstantStruct | VarStruct;
export type TokensWithTags = HasTagStruct;