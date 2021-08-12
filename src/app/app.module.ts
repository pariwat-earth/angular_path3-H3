import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TabbarComponent } from './tabbar/tabbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MaindataComponent } from './maindata/maindata.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CatalogComponent } from './catalog/catalog.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    MenubarComponent,
    MaindataComponent,
    HomeComponent,
    DashboardComponent,
    ProductsComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ///ทำDrawer
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,

    FormsModule,
    RouterModule.forRoot(routes),
    NgxBootstrapIconsModule,
    NgbModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
