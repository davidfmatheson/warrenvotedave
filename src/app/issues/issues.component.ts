import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  public isReturnCollapsed = true;
  public isTechCollapsed = true;
  public isBudgetCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
