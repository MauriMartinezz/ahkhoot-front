import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
