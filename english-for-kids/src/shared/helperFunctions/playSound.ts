const playAudio = (currentQuestion: string): void => {
  if (!currentQuestion.trim()) {
    return;
  }

  const audio = new Audio(currentQuestion);
  audio.play();
};

export default playAudio;
