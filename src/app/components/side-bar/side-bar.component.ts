import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  sidebar: any = {};
  pageContainer: any = {};
  toggleButton: any = {};
  @Input() toggleSidebar: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['toggleSidebar'].currentValue) {
      this.openSidebar();
    }
    else {
      this.closeSidebar();
    }
  }

  ngAfterViewInit() {
    this.sidebar = document.getElementById("side-bar");
    this.pageContainer = document.getElementById("page-container");
    this.toggleButton = document.getElementById("toggle-button");
  }

  openSidebar(): void {
    if (this.sidebar && this.pageContainer && this.toggleButton) {
      this.sidebar.style.width = "20%";
      this.pageContainer.style.marginLeft = window.innerWidth < 400 ? '16px' : '22%';
      this.toggleButton.classList.remove('bi-chevron-compact-right');
      this.toggleButton.classList.add('bi-chevron-compact-left');
    }
  }

  closeSidebar(): void {
    if (this.sidebar && this.pageContainer && this.toggleButton) {
      this.sidebar.style.width = "0";
      this.pageContainer.style.marginLeft = "32px";
      this.toggleButton.classList.remove('bi-chevron-compact-left');
      this.toggleButton.classList.add('bi-chevron-compact-right');
    }
  }
}
