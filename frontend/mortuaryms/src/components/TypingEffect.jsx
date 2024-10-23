import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// TypingEffect component
const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <Mdiv>
    <h2 class="typeffect">{displayedText}</h2>;
    </Mdiv>
};
const Mdiv= styled.div`
.typeffect{
background-color:#ffff
font-color:red;}
`;
export default TypingEffect;
