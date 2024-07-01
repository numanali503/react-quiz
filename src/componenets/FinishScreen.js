import { useQuiz } from '../contexts/QuizContext';

function FinishScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙂';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '😓';

  return (
    <>
      <p className="result">
        {emoji} You scored {points} out of {maxPossiblePoints} Points (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
