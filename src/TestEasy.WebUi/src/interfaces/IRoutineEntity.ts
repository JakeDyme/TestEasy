import { IArgument } from "./IArgument";
export interface IRoutineEntity {
    id: number;
    name: string;
    prompts: Array<IArgument>;
    fields: Array<IArgument>;
    actions: Array<IArgument>;
}
