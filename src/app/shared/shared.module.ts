import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { SwiperModule } from 'swiper/angular';
import { TruncatePipe } from './pipes/truncate.pipe';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CardComponent,
    TruncatePipe
  ],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [HeaderComponent, SidebarComponent, FooterComponent, CardComponent]
})
export class SharedModule {}
