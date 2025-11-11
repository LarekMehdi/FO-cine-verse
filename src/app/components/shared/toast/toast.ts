import { Component } from '@angular/core';
import { ToastService } from '../../../service/toast.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-toast',
  imports: [NgClass],
  standalone: true,
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {
  constructor(public toastService: ToastService) {}
}
