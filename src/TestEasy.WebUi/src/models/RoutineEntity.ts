import { IRoutineEntity } from "../interfaces/IRoutineEntity";
import { IArgument } from "../interfaces/IArgument";
export class RoutineEntity implements IRoutineEntity {
    id: number = 0;
    name: string;
    prompts: Array<IArgument>;
    fields: Array<IArgument>;
    actions: Array<IArgument>;
    constructor() {
        this.id = 0;
        this.name = "";
        this.prompts = new Array<IArgument>();
        this.fields = new Array<IArgument>();
        this.actions = new Array<IArgument>();
    }
}
