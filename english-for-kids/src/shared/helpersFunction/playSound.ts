const playAudio = (currentQuestion: string): void => {
  const audio = new Audio(currentQuestion);
  audio.play();
};

export default playAudio;
