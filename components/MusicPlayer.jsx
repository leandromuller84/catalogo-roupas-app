import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const tocarMusica = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current
          .play()
          .then(() => {
            console.log("Música local iniciada!");
            // Remove os ouvintes após o primeiro sucesso
            removerEventos();
          })
          .catch((error) => {
            console.log("Aguardando clique para liberar áudio...");
          });
      }
    };

    const removerEventos = () => {
      window.removeEventListener("click", tocarMusica);
      window.removeEventListener("mousedown", tocarMusica);
    };

    window.addEventListener("click", tocarMusica);
    window.addEventListener("mousedown", tocarMusica);

    return () => removerEventos();
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: "none" }}
      /* ATENÇÃO: Use o nome exato que aparece no seu VS Code */
      src="/loja.mp3.mp3"
    />
  );
}
