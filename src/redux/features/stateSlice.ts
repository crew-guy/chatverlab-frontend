
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArchiObj } from "@components/molecules/ArchiComp";

interface state {
  bizProb: string,
  questions: string[],
  currentPane: number,
  answers: string[],
  archiObj: ArchiObj,
  sysDiagUrl: string,
  iacCodeString: string,
  chatHistory: string,
  cloudCost: {
    totalCost: number,
    stepByStepCost: string[]
  }
}

const initialState: state = {
  bizProb: "",
  currentPane: 0,
  questions: [],
  answers: [],
  archiObj: {
    data: {
      introduction: "",
      layers: [],
      title: ""
    },
    source_docs: []
  },
  cloudCost: {
    totalCost: 0,
    stepByStepCost: []
  },
  sysDiagUrl: "",
  chatHistory: "",
  iacCodeString: ""
}

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setBizProb: (state, action: PayloadAction<string>) => {
      state.bizProb = action.payload;
    }
    ,
    setQuestions: (state, action: PayloadAction<string[]>) => {
      state.questions = action.payload;
    },
    setCurrentPane: (state, action: PayloadAction<number>) => {
      state.currentPane = action.payload;
    },
    setGlobalAnswers: (state, action: PayloadAction<string[]>) => {
      state.answers = action.payload;
    },
    setArchiObj: (state, action: PayloadAction<ArchiObj>) => {
      state.archiObj = action.payload;
    },
    setSysDiagUrl: (state, action: PayloadAction<string>) => {
      state.sysDiagUrl = action.payload;
    },
    setIacCode: (state, action: PayloadAction<string>) => {
      state.iacCodeString = action.payload;
    },
    setCloudCost: (state, action: PayloadAction<{ totalCost: number, stepByStepCost: string[] }>) => {
      state.cloudCost = action.payload;
    },
    appendToChatHistory: (state, action: PayloadAction<string>) => {
      state.chatHistory = state.chatHistory + action.payload;
    },
  },
});

export const {
  setBizProb,
  setQuestions,
  setCurrentPane,
  setGlobalAnswers,
  setArchiObj,
  setSysDiagUrl,
  appendToChatHistory,
  setIacCode,
  setCloudCost
} = stateSlice.actions;

export default stateSlice.reducer;
