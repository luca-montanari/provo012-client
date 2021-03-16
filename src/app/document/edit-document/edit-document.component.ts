import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-document',
    templateUrl: './edit-document.component.html',
    styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {

    form = this.formBuilder.group({
        id: [null, Validators.required],
        code: [null, Validators.required],
        description: [null, Validators.required],
        longDescription: [null],
    });

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

}
