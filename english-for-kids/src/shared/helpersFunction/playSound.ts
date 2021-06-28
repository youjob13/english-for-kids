const playAudio = (currentQuestion: string): void => {
  const audio = new Audio(process.env.PUBLIC_URL + currentQuestion);
  audio.play();
};

export default playAudio;
