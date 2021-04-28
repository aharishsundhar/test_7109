import { Component, OnInit } from '@angular/core';
import { LockcreateService } from './lockcreate.service';

@Component({
  selector: 'app-lockcreate',
  templateUrl: './lockcreate.component.html',
  styleUrls: ['./lockcreate.component.scss'],
})

export class LockcreateComponent implements OnInit {
    public test = {
        lock: '',
    }

    constructor (
        private lockcreateService: LockcreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.lockcreateService.GpCreate(this.test).subscribe(data => {
            this.test.lock = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}