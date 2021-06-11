export interface State {
    words: Array<string>;
    enteredText: string;
    correctCount: number;
    started: boolean;
    startTime: Date;
    wordsPerMinute: number;
  }