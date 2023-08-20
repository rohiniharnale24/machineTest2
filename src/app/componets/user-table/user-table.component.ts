import { Component, OnInit } from '@angular/core';
import { Itable } from 'src/app/model/userTable';
import { TableserviceService } from 'src/app/tableservice.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  tableArray: Array<Itable> = [];

  displayedColumns: string[] = [
    'id',
    'TransactionCode',
    'Name',
    'InvestAmount',
    'InvestRate',
    'Option',
  ];
  dataSource: Array<Itable> = [];
  constructor(private _tableData: TableserviceService) {}

  ngOnInit(): void {
    this._tableData.gettableData().subscribe((res) => {
      this.tableArray = res;
      console.log(this.tableArray);
      this.dataSource = this.tableArray;
    });
  }
}
