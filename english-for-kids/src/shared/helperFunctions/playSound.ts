const playAudio = (currentQuestion: string): void => {
  if (!currentQuestion.trim()) return;
  console.log(process.env.PUBLIC_URL);
  console.log(currentQuestion);
  const audio = new Audio(currentQuestion);
  audio.play();
};

export default playAudio;
