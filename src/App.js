import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Section from './components/Section';

export default function App() {
  let countTotalFeedback = useRef(0);
  let countPositiveFeedbackPercentage = useRef(0);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(prev => prev + 1);
  };
  const addNeutral = () => {
    setNeutral(prev => prev + 1);
  };
  const addBad = () => {
    setBad(prev => prev + 1);
  };

  useEffect(() => {
    countTotalFeedback.current = good + neutral + bad;
    countPositiveFeedbackPercentage.current = Math.round(
      (good / countTotalFeedback.current) * 100,
    );
  });

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
        total={countTotalFeedback.current}
        positivePercentage={countPositiveFeedbackPercentage.current}
      />
    </>
  );
}
