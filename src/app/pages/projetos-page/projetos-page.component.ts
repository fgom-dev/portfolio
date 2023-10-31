import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Repo} from "../../models/repo.model";
import {ReposService} from "../../services/repos.data.service";
import {Response} from "../../models/response.model";

@Component({
  selector: 'app-projetos-page',
  templateUrl: './projetos-page.component.html',
  styleUrls: ['./projetos-page.component.scss']
})
export class ProjetosPageComponent implements OnInit {
  public repos$: Observable<Repo[]> | undefined;

  constructor(private repoService: ReposService) {}

  ngOnInit(): void {
    this.repos$ = this.repoService.getRepos();
    console.log(this.repos$)
  }
}
