import React, { useState } from 'react';
import './App.css';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [state, dispatch] = useReducer(countReducer, {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // })

  const addGood = () => {
    setGood(prev => prev + 1);
  };
  const addNeutral = () => {
    setNeutral(prev => prev + 1);
  };
  const addBad = () => {
    setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section
        title={'Please leave feedback'}
        addGood={addGood}
        addNeutral={addNeutral}
        addBad={addBad}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
}
