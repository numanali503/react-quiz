import { useQuiz } from '../contexts/QuizContext';

function Options() {
  const { question, dispatch, answer } = useQuiz();
  const hasAnwer = answer !== null;
  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''}  ${
            hasAnwer
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnwer}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
