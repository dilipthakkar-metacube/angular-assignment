import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Task } from '../task/task';
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css'],
})
export class TaskformComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() taskForUpdate!: Task;
  myForm!: FormGroup;

  @Output() closeModal = new EventEmitter<void>();
  @Output() addTaskEvent = new EventEmitter<Task>();
  @Output() updateTaskEvent = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [this.taskForUpdate?.name || '', Validators.required],
      description: [
        this.taskForUpdate?.description || '',
        [Validators.required],
      ],
      status: [this.taskForUpdate?.status || 'pending', [Validators.required]],
      priority: [
        this.taskForUpdate?.priority || 'normal',
        [Validators.required],
      ],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (!changes?.['taskFoUpdate']) {
      this.ngOnInit();
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      if (this.taskForUpdate) {
        this.updateTaskEvent.emit({...this.taskForUpdate , ...this.myForm.value});
        console.log(this.myForm.value , " update task event")
      } else {
        this.addTaskEvent.emit(this.myForm.value);
      }
      this.myForm.reset();
    }
  }

  onCloseHandled() {
    this.myForm.reset();
    this.closeModal.emit();
  }
}
