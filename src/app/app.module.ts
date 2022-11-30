import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BlurryLoadingComponent } from './components/blurry-loading/blurry-loading.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component';
import { RandomChoicePickerComponent } from './components/random-choice-picker/random-choice-picker.component';
import { ExpandingCardsComponent } from './components/expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './components/rotating-navigation/rotating-navigation.component';
import { HiddenSearchWidgetComponent } from './components/hidden-search-widget/hidden-search-widget.component';
import { ScrollAnimationComponent } from './components/scroll-animation/scroll-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    BlurryLoadingComponent,
    VerticalSliderComponent,
    BackgroundSliderComponent,
    RandomChoicePickerComponent,
    ExpandingCardsComponent,
    ProgressStepsComponent,
    RotatingNavigationComponent,
    HiddenSearchWidgetComponent,
    ScrollAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
