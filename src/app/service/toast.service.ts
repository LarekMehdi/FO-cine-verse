import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ToastService {

    public message = signal<string | null>(null);
    public type = signal<'success' | 'error' | 'info' | null>(null);

    private show(msg: string, type: 'success' | 'error' | 'info') {
        this.message.set(msg);
        this.type.set(type);
        setTimeout(() => {
            this.message.set(null);
            this.type.set(null);
        }, 3000); // 3 secondes
    }

    public success(message: string) {
        this.show(message, 'success');
    }

    public error(message: string) {
        this.show(message, 'error');
    }

    public defaultError() {
        this.show('Une erreur est survenue', 'error');
    }

    public info(message: string) {
        this.show(message, 'info');
    }
}