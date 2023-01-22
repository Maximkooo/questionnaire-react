export const Game = ({ questions, onClickVariant, step }) => {
  const question = questions[step]
  const percentage = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) =>
          <li onClick={() => onClickVariant(index)} key={index}>{variant}</li>
        )}
      </ul>
    </>
  );
}