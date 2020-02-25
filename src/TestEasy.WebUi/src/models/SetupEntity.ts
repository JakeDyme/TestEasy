import { ISetupEntity } from "../interfaces/ISetupEntity";
import { IArgument } from "../interfaces/IArgument";
export class SetupEntity implements ISetupEntity {
    id: number = 0;
    name: string;
    prompts: Array<IArgument>;
    fields: Array<IArgument>;
    constructor() {
        this.id = 0;
        this.name = "";
        this.prompts = new Array<IArgument>();
        this.fields = new Array<IArgument>();
    }
}
