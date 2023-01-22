import React from 'react';
import { Game } from './components/game.js'
import { Result } from './components/result.js';
import { useState } from 'react';

import './index.scss';

const questions = [
  {
    title: 'React - it\'s ... ?',
    variants: [
      'library',
      'framework',
      'app'
    ],
    correct: 0,
  },
  {
    title: 'Component - it\'s ... ',
    variants: [
      'app',
      'part of an appendix or page',
      'that I don\'t know what is'
    ],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'this is simple HTML',
      'this is a function of',
      'this is the same HTML, but with the ability to run JS code',
    ],
    correct: 2,
  },
];

const App = () => {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (questions[step].correct === index) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {step < questions.length ?
        <Game questions={questions} onClickVariant={onClickVariant} step={step} />
        :
        <Result correct={correct} questionsCount={questions.length} />
      }
    </div>
  );
}

export default App;