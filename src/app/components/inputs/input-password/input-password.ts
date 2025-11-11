import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  imports: [
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './input-password.html',
  styleUrl: './input-password.css'
})
export class InputPassword {
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
