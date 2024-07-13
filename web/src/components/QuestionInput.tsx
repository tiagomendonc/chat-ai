import SendIcon from '../assets/icons/send-icon.svg';
import { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from 'react';

type QuestionInputProps = {
  addMessage: (text: string, isUser: boolean) => void;
  navigate?: (url: string) => void;
};

function QuestionInput({ addMessage, navigate }: QuestionInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage(inputValue, true);
      setInputValue('');
      if (navigate) {
        navigate('/new-conversation');
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-lg w-full md:w-full">
      <textarea
        ref={textareaRef}
        value={inputValue}
        placeholder="Enter your message..."
        className="flex-grow p-2 bg-gray-100 max-h-28 rounded-lg outline-none resize-none overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        rows={1}
      />
      <button className="ml-2" onClick={handleSendMessage}>
        <img src={SendIcon} alt="Send" />
      </button>
    </div>
  );
}

export default QuestionInput;
