import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component';
import { BlurryLoadingComponent } from './components/blurry-loading/blurry-loading.component';
import { ExpandingCardsComponent } from './components/expanding-cards/expanding-cards.component';
import { FormWaveComponent } from './components/form-wave/form-wave.component';
import { HiddenSearchWidgetComponent } from './components/hidden-search-widget/hidden-search-widget.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { RandomChoicePickerComponent } from './components/random-choice-picker/random-choice-picker.component';
import { RotatingNavigationComponent } from './components/rotating-navigation/rotating-navigation.component';
import { ScrollAnimationComponent } from './components/scroll-animation/scroll-animation.component';
import { SplitLandingPageComponent } from './components/split-landing-page/split-landing-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'expanding-cards', component: ExpandingCardsComponent },
  { path: 'random-choice-picker', component: RandomChoicePickerComponent },
  { path: 'progress-steps', component: ProgressStepsComponent },
  { path: 'rotating-navigation', component: RotatingNavigationComponent },
  { path: 'hidden-search', component: HiddenSearchWidgetComponent },
  { path: 'blurry-loading', component: BlurryLoadingComponent },
  { path: 'scroll-animation', component: ScrollAnimationComponent },
  { path: 'split-landing', component: SplitLandingPageComponent },
  { path: 'form-wave', component: FormWaveComponent },
  { path: 'vertical-slider', component: VerticalSliderComponent },
  { path: 'background-slider', component: BackgroundSliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
