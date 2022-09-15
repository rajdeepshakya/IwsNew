import { RouterModule, Routes } from '@angular/router';

import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
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
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { UsersProfileComponent } from './components/users-profile/users-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PagesLoginComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: PagesLoginComponent },
  {
    path: '',
    //canActivate: [AuthGuard],
    component: SiteLayoutComponent,
    data: { title: 'Home' },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'snippet',
        loadChildren: () =>import('./components/snippet/snippet.module').then((m) => m.SnippetdModule),
      },
    ],
  },

  // { path: '', component: DashboardComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'alerts', component: AlertsComponent },
  // { path: 'accordion', component: AccordionComponent },
  // { path: 'badges', component: BadgesComponent },
  // { path: 'breadcrumbs', component: BreadcrumbsComponent },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'cards', component: CardsComponent },
  // { path: 'carousel', component: CarouselComponent },
  // { path: 'charts-apexcharts', component: ChartsApexchartsComponent },
  // { path: 'charts-chartjs', component: ChartsChartjsComponent },
  // { path: 'form-editors', component: FormsEditorsComponent },
  // { path: 'form-elements', component: FormsElementsComponent },
  // { path: 'form-layouts', component: FormsLayoutsComponent },
  // { path: 'icons-bootstrap', component: IconsBootstrapComponent },
  // { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  // { path: 'icons-remix', component: IconsRemixComponent },
  // { path: 'list-group', component: ListGroupComponent },
  // { path: 'modal', component: ModalComponent },
  // { path: 'pagination', component: PaginationComponent },
  // { path: 'progress', component: ProgressComponent },
  // { path: 'spinners', component: SpinnersComponent },
  // { path: 'tables-data', component: TablesDataComponent },
  // { path: 'tables-general', component: TablesGeneralComponent },
  // { path: 'tabs', component: TabsComponent },
  // { path: 'tooltips', component: TooltipsComponent },
  // { path: 'pages-blank', component: PagesBlankComponent },
  // { path: 'pages-contact', component: PagesContactComponent },
  // { path: 'pages-error404', component: PagesError404Component },
  // { path: 'pages-faq', component: PagesFaqComponent },
  // { path: 'pages-login', component: PagesLoginComponent },
  // { path: 'pages-register', component: PagesRegisterComponent },
  // { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
