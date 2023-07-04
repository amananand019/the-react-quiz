function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "🙃";
  else if (percentage > 20) emoji = "🤨";
  else emoji = "🤦‍♂️";

  return (
    <p className="result">
      <span>{emoji}</span> Your score <strong>{points}</strong> out of{" "}
      {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
