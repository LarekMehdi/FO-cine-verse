import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ToastService {

    public message = signal<string | null>(null);

    private show(msg: string) {
        this.message.set(msg);
        setTimeout(() => {
            this.message.set(null);
        }, 3000); // 3 secondes
    }

    public success(message: string) {
        this.show(message);
    }

    public error(message: string) {
        this.show(message);
    }

    public info(message: string) {
        this.show(message);
    }
}