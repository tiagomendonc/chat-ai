import { useEffect, useState } from 'react';
import BackgroundImage from '../assets/icons/background.svg';
import QuestionInput from './QuestionInput';
import SuggestionFunctionIcon from '../assets/icons/suggestionFunction.svg';
import SuggestionAIIcon from '../assets/icons/suggestionAi.svg';
import SuggestionEngineIcon from '../assets/icons/suggestionEngine.svg';
import SuggestionBox from './SuggestionBox';
import ChatBubble from './ChatBubble';
import { Message } from '../types/Message';
import { useNavigate } from 'react-router-dom';

type ConversationContainerProps = {
  newQuestion: boolean;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};

function ConversationContainer({
  newQuestion,
  messages,
  setMessages,
}: ConversationContainerProps) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLoading = (value: boolean) => {
    setLoading(value);
    if (value) {
      setMessages((prevMessages: Message[]) => [
        ...prevMessages,
        {
          text: 'Esperando resposta...',
          isUser: false,
          createdAt: new Date(),
        },
      ]);
      return;
    }
  };

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3030/api/events');

    eventSource.onmessage = (event) => {
      setLoading(false);
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [setMessages]);

  const addMessage = (text: string, isUser: boolean): void => {
    const newMessages = [...messages, { text, isUser, createdAt: new Date() }];
    setMessages(newMessages);

    fetch('http://localhost:3030/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, isUser }),
    }).catch((error) => {
      console.error('Error:', error);
    });

    handleLoading(true);
  };

  return (
    <div className="flex flex-col justify-between items-center w-full h-full p-2 md:p-4">
      {newQuestion ? (
        <>
          <div className="flex justify-center items-center w-full flex-grow">
            <img src={BackgroundImage} alt="Background" className="" />
          </div>
          <div className="flex flex-row justify-center items-center w-8/12 p-2 md:p-4">
            <SuggestionBox
              text="Me diga sobre a diferença de um modelo de linguagem generalista e um modelo especializado."
              icon={SuggestionAIIcon}
              addMessage={addMessage}
            />
            <SuggestionBox
              text="Poderia me explicar melhor o processo de Fine-Tuning e um modelo de linguagem?"
              icon={SuggestionEngineIcon}
              addMessage={addMessage}
            />
            <SuggestionBox
              text="O que seria uma function e como ela impacta uma inteligência artificial?"
              icon={SuggestionFunctionIcon}
              addMessage={addMessage}
            />
          </div>
          <div className="w-full flex justify-center p-2 md:p-4">
            <QuestionInput addMessage={addMessage} navigate={navigate} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col flex-grow w-full md:w-8/12 overflow-y-auto p-2 md:p-4 justify-end">
            {messages.map((msg, index) => (
              <ChatBubble key={index} message={msg} />
            ))}
          </div>
          <div className="w-full flex justify-center p-2 md:p-4">
            <QuestionInput addMessage={addMessage} />
          </div>
        </>
      )}
    </div>
  );
}

export default ConversationContainer;
