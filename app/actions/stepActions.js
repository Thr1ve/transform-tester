import { updateHighlights } from './codeActions';

export const LOAD_STEPS = 'LOAD_STEPS';
export const loadSteps = steps =>
  ({ type: LOAD_STEPS, steps});

export const SET_NEXT_STEP = 'SET_NEXT_STEP';
export const setNextStep = () =>
  ({ type: SET_NEXT_STEP });

export const SET_PREVIOUS_STEP = 'SET_PREVIOUS_STEP';
export const setPreviousStep = () =>
  ({ type: SET_PREVIOUS_STEP });


export const executeCurrentStep = () => (dispatch, getState) => {
  const { loadedSteps, currentStep } = getState().steps;
  dispatch(updateHighlights(loadedSteps[currentStep].highlighted))
}

export const initSteps = steps => dispatch => {
  dispatch(loadSteps(steps));
  dispatch(executeCurrentStep());
}

export const nextStep = () => dispatch => {
  dispatch(setNextStep());
  dispatch(executeCurrentStep());
}

export const previousStep = () => dispatch => {
  dispatch(setPreviousStep());
  dispatch(executeCurrentStep());
}