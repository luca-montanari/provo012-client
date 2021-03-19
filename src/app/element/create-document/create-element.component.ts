import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ElementService } from 'src/app/services/element.service';

@Component({
    selector: 'app-create-element',
    templateUrl: './create-element.component.html',
    styleUrls: ['./create-element.component.scss']
})
export class CreateElementComponent implements OnInit {

    form = this.formBuilder.group({
        code: [null, Validators.required],
        description: [null, Validators.required],
        longDescription: [null],
    });

    constructor(private formBuilder: FormBuilder, private elementService: ElementService) { }

    ngOnInit(): void {
        // this.form.valueChanges.subscribe(val => {
        //     console.log(val);
        // });
    }

    createElement() {
        console.log('CreateElementComponent', 'createElement', this.form.value);        
        this.elementService.create(this.form.value).subscribe(val => {
            console.log('CreateElementComponent', 'createElement', 'elemento creato', val);        
        });
    }

}
