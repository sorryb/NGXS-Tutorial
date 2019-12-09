import {State, Action, StateContext, Selector} from '@ngxs/store';
import { Tutorial } from './../models/tutorial.model';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.actions';

// state model - a collection of Tutorial

export class TutorialStateModel {
    tutorials: Tutorial[];
}


// state decorator and state class with actions
@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})
export class TutorialState {

  // selector of state
  @Selector()
  static getTutorials(state: TutorialStateModel) {
      return state.tutorials;
  }

  // actions
  @Action(AddTutorial)
  add({getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
      const state = getState();
      patchState({
          tutorials: [...state.tutorials, payload]
      });
  }

  @Action(RemoveTutorial)
  remove({getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
      patchState({
          tutorials: getState().tutorials.filter(a => a.name !== payload)
      });
  }

}
