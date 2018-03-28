import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-depratment-lit',
  template: `
    <div>
      <ul>
        <li (click)='onSelect(department)' [class.selected]='isSelected(department)' *ngFor='let department of departments'>
          <span>{{department.id}}</span> <span>{{department.name}}</span>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class DepratmentLitComponent implements OnInit {
  private selectedId: string;
  private departments = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Node'},
    {'id': 3, 'name': 'Express'},
    {'id': 4, 'name': 'MongoDB'}
  ];
  constructor(private _router: Router, private _routerActivated: ActivatedRoute) { }

  ngOnInit() {
    this._routerActivated.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.selectedId = id;
    });
  }

  onSelect(department) {
    // this._router.navigate(['/departments', department.id]);
    this._router.navigate([department.id], {relativeTo: this._routerActivated});
  }

  isSelected(department) {
    console.log((department.id).toString() === this.selectedId);
    return (department.id).toString() === this.selectedId;
  }

}
