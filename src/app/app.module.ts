import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
// import { ComponentsModule } from './components/component.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { PagesBlankComponent } from './components/pages-blank/pages-blank.component';
import { PagesContactComponent } from './components/pages-contact/pages-contact.component';
import { PagesError404Component } from './components/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './components/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './components/pages-login/pages-login.component';
import { PagesRegisterComponent } from './components/pages-register/pages-register.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { AppHttpInterceptor } from './constants/interceptor';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    // DashboardComponent,
    // AlertsComponent,
    // AccordionComponent,
    // BadgesComponent,
    // BreadcrumbsComponent,
    // ButtonsComponent,
    // CardsComponent,
    // CarouselComponent,
    // ListGroupComponent,
    // ModalComponent,
    // TabsComponent,
    // PaginationComponent,
    // ProgressComponent,
    // SpinnersComponent,
    // TooltipsComponent,
    // FormsElementsComponent,
    // FormsLayoutsComponent,
    // FormsEditorsComponent,
    // TablesGeneralComponent,
    // TablesDataComponent,
    // ChartsChartjsComponent,
    // ChartsApexchartsComponent,
    // IconsBootstrapComponent,
    // IconsRemixComponent,
    // IconsBoxiconsComponent,
    // UsersProfileComponent,
    // PagesFaqComponent,
    // PagesContactComponent,
    // PagesRegisterComponent,
    // PagesLoginComponent,
    // PagesError404Component,
    // PagesBlankComponent,
    SiteLayoutComponent,
   // SnippetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule
    //ComponentsModule
  ],
  providers:[DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
