
import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText {

  @Input() label?: string;
  @Input() name?: string;
  @Input() placeholder: string = ''
  @Input() displayLabel = true;
  @Input() inline = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input() inputClass?: string;
  @Input() labelClass?: string;
  @Input() symbol?: string;
  @Input() formControl?: FormControl;

  @Output() contentChange = new EventEmitter<string>();

  get hasError() {
    return this.formControl?.invalid && (this.formControl?.dirty || this.formControl?.touched);
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.contentChange.emit(input.value);
  }

}
