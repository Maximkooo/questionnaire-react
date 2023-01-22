export const Result = ({onClickAgain, correct, questionsCount}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="hurray"/>
      <h2> {correct} of {questionsCount} right answers</h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}