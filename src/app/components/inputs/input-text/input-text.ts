
import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, ReactiveFormsModule } from '@angular/forms';

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

  @Input() value = '';
  @Input() showError = false;
  @Input() errorMessage: string | null = null;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
  onChange = (value: any) => {};
  onTouched = () => {};

}
