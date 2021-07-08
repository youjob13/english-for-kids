const playAudio = (currentQuestion: string): void => {
  if (!currentQuestion.trim()) return;
  const audio = new Audio(process.env.PUBLIC_URL + currentQuestion);
  audio.play();
};

export default playAudio;
