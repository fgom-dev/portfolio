import {Repo} from "./repo.model";

export class Response {
    public user!: {
      pinnedItems: {
        nodes: Repo[]
      }
    }
}
