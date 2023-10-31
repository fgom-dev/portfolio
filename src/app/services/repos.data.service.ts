import {Apollo, gql} from "apollo-angular";
import {map} from "rxjs";
import {Repo} from "../models/repo.model";
import {Injectable} from "@angular/core";
import {Response} from "../models/response.model";

const GET_REPOS = gql`
{
  user(login: "fgom-dev") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  constructor(private apollo: Apollo) {}

  getRepos() {
    return this.apollo.watchQuery<Response>({
      query: GET_REPOS,
    })
      .valueChanges.pipe(map(result => result.data.user.pinnedItems.nodes));
  }
}
