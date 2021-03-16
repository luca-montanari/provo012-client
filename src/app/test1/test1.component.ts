import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Test1DataSource, Test1Item } from './test1-datasource';

@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.scss']
})
export class Test1Component implements AfterViewInit, OnInit {
    
    @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
    @ViewChild(MatSort) sort: MatSort | null= null;
    @ViewChild(MatTable) table: MatTable<Test1Item> | null = null;
    dataSource: Test1DataSource | null = null;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];

    ngOnInit() {
        this.dataSource = new Test1DataSource();
    }

    ngAfterViewInit() {
        if (this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            if (this.table) {
                this.table.dataSource = this.dataSource;
            }            
        }
    }
    
}
