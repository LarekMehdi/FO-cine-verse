import { Component } from '@angular/core';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
  standalone: true,
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {
  constructor(public toastService: ToastService) {}
}
