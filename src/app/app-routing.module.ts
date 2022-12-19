import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedNavigationComponent } from './components/animated-navigation/animated-navigation.component';
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component';
import { BlurryLoadingComponent } from './components/blurry-loading/blurry-loading.component';
import { ButtonRippleComponent } from './components/button-ripple/button-ripple.component';
import { ContentPlaceholderComponent } from './components/content-placeholder/content-placeholder.component';
import { DadJokesComponent } from './components/dad-jokes/dad-jokes.component';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { DrawingAppComponent } from './components/drawing-app/drawing-app.component';
import { DrinkWaterComponent } from './components/drink-water/drink-water.component';
import { EventKeycodesComponent } from './components/event-keycodes/event-keycodes.component';
import { ExpandingCardsComponent } from './components/expanding-cards/expanding-cards.component';
import { FaqBoxesComponent } from './components/faq-boxes/faq-boxes.component';
import { FormWaveComponent } from './components/form-wave/form-wave.component';
import { HiddenSearchWidgetComponent } from './components/hidden-search-widget/hidden-search-widget.component';
import { IncrementingCounterComponent } from './components/incrementing-counter/incrementing-counter.component';
import { KineticLoaderComponent } from './components/kinetic-loader/kinetic-loader.component';
import { MovieAppComponent } from './components/movie-app/movie-app.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { RandomChoicePickerComponent } from './components/random-choice-picker/random-choice-picker.component';
import { RotatingNavigationComponent } from './components/rotating-navigation/rotating-navigation.component';
import { ScrollAnimationComponent } from './components/scroll-animation/scroll-animation.component';
import { SoundBoardComponent } from './components/sound-board/sound-board.component';
import { SplitLandingPageComponent } from './components/split-landing-page/split-landing-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { StickyNavbarComponent } from './components/sticky-navbar/sticky-navbar.component';
import { ThemeClockComponent } from './components/theme-clock/theme-clock.component';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'expanding-cards', component: ExpandingCardsComponent },
  { path: 'progress-steps', component: ProgressStepsComponent },
  { path: 'rotating-navigation', component: RotatingNavigationComponent },
  { path: 'hidden-search', component: HiddenSearchWidgetComponent },
  { path: 'blurry-loading', component: BlurryLoadingComponent },
  { path: 'scroll-animation', component: ScrollAnimationComponent },
  { path: 'split-landing', component: SplitLandingPageComponent },
  { path: 'form-wave', component: FormWaveComponent },
  { path: 'sound-board', component: SoundBoardComponent },
  { path: 'dad-jokes', component: DadJokesComponent },
  { path: 'event-keycodes', component: EventKeycodesComponent },
  { path: 'faq-boxes', component: FaqBoxesComponent },
  { path: 'random-choice-picker', component: RandomChoicePickerComponent },
  { path: 'animated-navigation', component: AnimatedNavigationComponent },
  { path: 'incrementing-counter', component: IncrementingCounterComponent },
  { path: 'drink-water', component: DrinkWaterComponent },
  { path: 'movie-app', component: MovieAppComponent },
  { path: 'background-slider', component: BackgroundSliderComponent },
  { path: 'theme-clock', component: ThemeClockComponent },
  { path: 'button-ripple', component: ButtonRippleComponent },
  { path: 'drag-n-drop', component: DragNDropComponent },
  { path: 'drawing', component: DrawingAppComponent },
  { path: 'kinetic-loader', component: KineticLoaderComponent },
  { path: 'content-placeholder', component: ContentPlaceholderComponent },
  { path: 'sticky-navbar', component: StickyNavbarComponent },
  { path: 'vertical-slider', component: VerticalSliderComponent },
  { path: 'toast-notification', component: ToastNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
