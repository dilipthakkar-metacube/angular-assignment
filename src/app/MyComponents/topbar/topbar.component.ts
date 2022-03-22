import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  @Output() openTaskModal = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick(){
    this.openTaskModal.emit();
  }
}
