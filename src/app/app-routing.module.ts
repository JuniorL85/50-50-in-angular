import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component';
import { BlurryLoadingComponent } from './components/blurry-loading/blurry-loading.component';
import { ExpandingCardsComponent } from './components/expanding-cards/expanding-cards.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';
import { RandomChoicePickerComponent } from './components/random-choice-picker/random-choice-picker.component';
import { RotatingNavigationComponent } from './components/rotating-navigation/rotating-navigation.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';

const routes: Routes = [
  { path: 'expanding-cards', component: ExpandingCardsComponent },
  { path: 'blurry-loading', component: BlurryLoadingComponent },
  { path: 'vertical-slider', component: VerticalSliderComponent },
  { path: 'background-slider', component: BackgroundSliderComponent },
  { path: 'random-choice-picker', component: RandomChoicePickerComponent },
  { path: 'progress-steps', component: ProgressStepsComponent },
  { path: 'rotating-navigation', component: RotatingNavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
