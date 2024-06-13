import { useState, useEffect } from 'react';

function useTypingEffect(text: string, speed: number) {
  const [typedText, setTypedText] = useState<string>('');

  useEffect(() => {
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setTypedText((prevText) => prevText + text.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, [text, speed]);

  return typedText;
}

export default useTypingEffect;
