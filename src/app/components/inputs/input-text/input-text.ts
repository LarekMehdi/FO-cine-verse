
import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  imports: [
    NgClass
  ],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText {

  @Input() content!: string;
  @Input() label?: string;
  @Input() name?: string;
  @Input() placeholder?: string;
  @Input() displayLabel = true;
  @Input() inline = false;
  @Input() isRequired = false;
  @Input() disabled = false;
  @Input() inputClass?: string;
  @Input() labelClass?: string;
  @Input() symbol?: string;
  @Input() validation?: any;

  @Output() contentChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.contentChange.emit(input.value);
  }

}
