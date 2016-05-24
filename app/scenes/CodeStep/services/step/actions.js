import { updateHighlights } from '../code/actions';
import { updateNote } from '../notes/actions';
import { setScopes, processScopes } from '../scopes/actions';

export const LOAD_STEPS = 'LOAD_STEPS';
export const loadSteps = steps =>
  ({ type: LOAD_STEPS, steps });

export const SET_NEXT_STEP = 'SET_NEXT_STEP';
export const setNextStep = () =>
  ({ type: SET_NEXT_STEP });

export const SET_PREVIOUS_STEP = 'SET_PREVIOUS_STEP';
export const setPreviousStep = () =>
  ({ type: SET_PREVIOUS_STEP });

export const SET_STEP = 'SET_STEP';
export const setStep = (n) =>
  ({ type: SET_STEP, n });


export const executeCurrentStep = () => (dispatch, getState) => {
  const { loadedSteps, currentStep } = getState().codeStep.steps;
  const { highlighted, scopes, note } = loadedSteps[currentStep];
  dispatch(updateHighlights(highlighted));
  dispatch(setScopes(scopes));
  dispatch(updateNote(note));
};

export const initSteps = steps => dispatch => {
  dispatch(loadSteps(processScopes(steps)));
  dispatch(executeCurrentStep());
};

export const nextStep = () => dispatch => {
  dispatch(setNextStep());
  dispatch(executeCurrentStep());
};

export const previousStep = () => dispatch => {
  dispatch(setPreviousStep());
  dispatch(executeCurrentStep());
};

export const pickStep = (n) => dispatch => {
  dispatch(setStep(n));
  dispatch(executeCurrentStep());
};
