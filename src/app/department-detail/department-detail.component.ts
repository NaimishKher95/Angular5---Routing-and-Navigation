import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
      department-detail works! {{departmentId}}
      <p>
        <button (click)='showOverview()'>Overview</button>
        <button (click)='showConatct()'>Contact</button>
      </p>

      <router-outlet></router-outlet>

      <p>
      <button (click)='goPrevious()'>Previous</button>
      <button (click)='goNext()'>Next</button>
      </p>
    <div>
      <button (click)='goToDepartment()'>Go To DepartMent</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  private departmentId: number;
  constructor(private _routeActivated: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    // Drawback - will not initialize again. so previous and Next will not work

    // const id = parseInt(this._routeActivated.snapshot.paramMap.get('id'), 10);
    // this.departmentId = id;

    // Method Call Param Observable
    this._routeActivated.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.departmentId = id;
    });
  }

  goPrevious() {
    const preciousId = this.departmentId - 1;
    this._router.navigate(['/departments', preciousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this._router.navigate(['/departments', nextId]);
  }

  goToDepartment() {
    const selectedId = this.departmentId ? this.departmentId : null;
    console.log(selectedId);
    // this._router.navigate(['/departments', {id: selectedId}]);
    this._router.navigate(['../', { id: selectedId }], { relativeTo: this._routeActivated });
  }

  showOverview() {
    this._router.navigate(['overview'], { relativeTo: this._routeActivated });
  }

  showConatct() {
    this._router.navigate(['contact'], { relativeTo: this._routeActivated });
  }
}
