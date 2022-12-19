import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

// Components
import { BlurryLoadingComponent } from './components/blurry-loading/blurry-loading.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component';
import { RandomChoicePickerComponent } from './components/random-choice-picker/random-choice-picker.component';
import { ExpandingCardsComponent } from './components/expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { RotatingNavigationComponent } from './components/rotating-navigation/rotating-navigation.component';
import { HiddenSearchWidgetComponent } from './components/hidden-search-widget/hidden-search-widget.component';
import { ScrollAnimationComponent } from './components/scroll-animation/scroll-animation.component';
import { SplitLandingPageComponent } from './components/split-landing-page/split-landing-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { FormWaveComponent } from './components/form-wave/form-wave.component';
import { SoundBoardComponent } from './components/sound-board/sound-board.component';
import { DadJokesComponent } from './components/dad-jokes/dad-jokes.component';
import { HttpClientModule } from '@angular/common/http';
import { EventKeycodesComponent } from './components/event-keycodes/event-keycodes.component';
import { FaqBoxesComponent } from './components/faq-boxes/faq-boxes.component';
import { AnimatedNavigationComponent } from './components/animated-navigation/animated-navigation.component';
import { IncrementingCounterComponent } from './components/incrementing-counter/incrementing-counter.component';
import { DrinkWaterComponent } from './components/drink-water/drink-water.component';
import { MovieAppComponent } from './components/movie-app/movie-app.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ThemeClockComponent } from './components/theme-clock/theme-clock.component';
import { ButtonRippleComponent } from './components/button-ripple/button-ripple.component';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { DrawingAppComponent } from './components/drawing-app/drawing-app.component';
import { KineticLoaderComponent } from './components/kinetic-loader/kinetic-loader.component';
import { ContentPlaceholderComponent } from './components/content-placeholder/content-placeholder.component';
import { StickyNavbarComponent } from './components/sticky-navbar/sticky-navbar.component';

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
    ScrollAnimationComponent,
    SplitLandingPageComponent,
    StartPageComponent,
    FormWaveComponent,
    SoundBoardComponent,
    DadJokesComponent,
    EventKeycodesComponent,
    FaqBoxesComponent,
    AnimatedNavigationComponent,
    IncrementingCounterComponent,
    DrinkWaterComponent,
    MovieAppComponent,
    ErrorMessageComponent,
    ThemeClockComponent,
    ButtonRippleComponent,
    DragNDropComponent,
    DrawingAppComponent,
    KineticLoaderComponent,
    ContentPlaceholderComponent,
    StickyNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ErrorMessageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
