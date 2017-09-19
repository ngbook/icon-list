import {
    Directive, Input,
    ElementRef, Renderer2,
    HostListener,
} from '@angular/core';
import { Icon } from './icon.model';

@Directive({
  selector: '[tooltip]'
})
export class IconDirective {
    @Input()
    text: string;
    private container: any; // tooltip容器

    constructor(
        private element: ElementRef,
        private renderer: Renderer2) { }

    @HostListener('mouseenter', ['$event'])
    showTip(event: any) {
        // console.log(event);
        if (!this.container) {
            this.createTipElement();
        }
        this.container.style.display = 'block';
        this.container.style.left = event.clientX + 'px';
        this.container.style.top = event.clientY + 'px';
    }
    @HostListener('mouseleave')
    hideTip(event: any) {
        if (this.container) {
            this.container.style.display = 'none';
        }
    }

    private createTipElement() {
        const container = this.container
            = this.renderer.createElement('div');
        const styles = {
                position: 'fixed',
                background: 'rgba(0,0,0,0.8)',
                display: 'none',
                color: '#fff',
                borderRadius: '4px',
                padding: '5px 10px',
            };
        for (let key in styles) {
            if (styles.hasOwnProperty(key)) {
                container.style[key] = styles[key];
            }
        }
        container.innerHTML = this.text;
        this.renderer.appendChild(
            this.element.nativeElement.parentElement,
            this.container);
    }
}
