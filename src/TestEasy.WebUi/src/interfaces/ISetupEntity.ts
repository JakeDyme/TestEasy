import { IArgument } from "./IArgument";
export interface ISetupEntity {
    id: number;
    name: string;
    prompts: Array<IArgument>;
    fields: Array<IArgument>;
}
