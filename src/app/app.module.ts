import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { ProjectsJavascriptComponent } from './projects-javascript/projects-javascript.component';
import { ProjectsAngularComponent } from './projects-angular/projects-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    BannerComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    StartscreenComponent,
    ProjectsJavascriptComponent,
    ProjectsAngularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
