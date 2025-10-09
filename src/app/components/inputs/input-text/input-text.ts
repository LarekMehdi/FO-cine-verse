
import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [
    NgClass,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputText),
      multi: true
    }
  ],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText implements ControlValueAccessor{
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  setValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  value = '';

  onChange = (value: any) => {};
  onTouched = () => {};

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
