import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ number, text }) => (
  <tr>
    <td>{text}: </td>
    <td>{number}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  }

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const posPercent = (good / total) * 100;

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="Good" number={good} />
          <Statistic text="Neutral" number={neutral} />
          <Statistic text="Bad" number={bad} />
          <Statistic text="Total" number={total} />
          <Statistic text="Average" number={average.toFixed(2)} />
          <Statistic text="Positive" number={posPercent.toFixed(2)} />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (action) => {
    if (action === "good") {
      setGood(good + 1);
      return;
    }

    if (action === "neutral") {
      setNeutral(neutral + 1);
      return;
    }

    if (action === "bad") {
      setBad(bad + 1);
      return;
    }
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button
        handleClick={() => {
          handleClick("good");
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          handleClick("neutral");
        }}
        text="neutral"
      />
      <Button
        handleClick={() => {
          handleClick("bad");
        }}
        text="bad"
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
