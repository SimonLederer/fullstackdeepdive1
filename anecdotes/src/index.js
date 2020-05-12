import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
  return (
    <button
      onClick={() => {
        handleClick();
      }}>
      {text}
    </button>
  );
};
const Anecdote = ({ text, numVotes }) => {
  return (
    <>
      <p>{text}</p>
      <p>Has {numVotes} votes</p>
    </>
  );
};
const App = ({ anecdotes }) => {
  const getRandom = () => Math.floor(Math.random() * 6);
  const [selected, setSelected] = useState(getRandom());
  const [votes, setVotes] = useState(new Uint8Array(6));
  const newAnecdote = () => {
    setSelected(getRandom());
  };
  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };
  const getMostVotedAnecdote = () => {
    const max = Math.max(...votes);
    const index = votes.indexOf(max);
    return <Anecdote text={anecdotes[index]} numVotes={max} />;
  };
  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} numVotes={votes[selected]} />
      <Button handleClick={vote} text="Vote" />
      <Button handleClick={newAnecdote} text="Next anecdote" />
      <h1>Anecdote with the most votes</h1>
      {getMostVotedAnecdote()}
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
