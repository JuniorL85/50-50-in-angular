import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundSliderComponent } from './components/background-slider/background-slider.component';
import { BlurryLoadingComponent } from './components/blurry-loading/blurry-loading.component';
import { RandomChoicePickerComponent } from './components/random-choice-picker/random-choice-picker.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';

const routes: Routes = [
  { path: 'blurry-loading', component: BlurryLoadingComponent },
  { path: 'vertical-slider', component: VerticalSliderComponent },
  { path: 'background-slider', component: BackgroundSliderComponent },
  { path: 'random-choice-picker', component: RandomChoicePickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
