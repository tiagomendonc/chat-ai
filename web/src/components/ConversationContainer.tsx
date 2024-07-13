import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import BackgroundImage from '../assets/icons/background.svg';
import QuestionInput from './QuestionInput';
import SuggestionBox from './SuggestionBox';
import ChatBubble from './ChatBubble';
import { Message } from '../types/Message';
import { useNavigate } from 'react-router-dom';
import { suggestionBoxContent } from '../constants/suggestionBoxContent';
import { PENDING_SYSTEM_MESSAGE_ID } from '../constants/systemMessage';

type ConversationContainerProps = {
  newQuestion: boolean;
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

function ConversationContainer({
  newQuestion,
  messages,
  setMessages,
}: ConversationContainerProps) {
  const navigate = useNavigate();

  const [pendingMessageId, setPendingMessageId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleLoading = (value: boolean) => {
    if (value) {
      const id = PENDING_SYSTEM_MESSAGE_ID;
      setPendingMessageId(id);
      setMessages((prevMessages: Message[]) => [
        ...prevMessages,
        {
          id,
          text: '',
          isUser: false,
          createdAt: new Date(),
        },
      ]);
      return;
    }
  };

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollTo({
        behavior: 'smooth',
        top: messagesEndRef.current.scrollHeight,
      });
    };

    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3030/api/events');

    eventSource.onmessage = (event) => {
      const data: Message = JSON.parse(event.data);
      setMessages((prevMessages: Message[]) => {
        const newMessages = prevMessages.map((msg) =>
          msg.id === pendingMessageId ? data : msg
        );
        setPendingMessageId(null);
        return newMessages;
      });
    };

    eventSource.onerror = (error) => {
      console.error('EventSource error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [setMessages, pendingMessageId]);

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
    <div className="flex flex-col justify-between items-center w-full h-full p-2 md:p-4 overflow-hidden">
      {newQuestion ? (
        <>
          <div className="flex justify-center items-center w-full flex-grow">
            <img src={BackgroundImage} alt="Background" className="" />
          </div>
          <div className="w-full sm:w-8/12 flex flex-col justify-between">
            <div className="flex flex-row items-end sm:justify-center justify-start w-full p-2 md:p-4 overflow-x-auto">
              {suggestionBoxContent.map((content, index) => (
                <SuggestionBox
                  key={index}
                  text={content.text}
                  icon={content.icon}
                  addMessage={addMessage}
                />
              ))}
            </div>
            <div className="w-full flex justify-center p-2 md:p-4">
              <QuestionInput addMessage={addMessage} navigate={navigate} />
            </div>
          </div>
        </>
      ) : (
        <div className="w-full sm:w-8/12 flex flex-col justify-end flex-grow overflow-hidden h-full">
          <div
            className="flex flex-col w-full h-max p-2 md:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            ref={messagesEndRef}
          >
            {messages.map((msg, index) => (
              <ChatBubble key={index} message={msg} />
            ))}
          </div>
          <div className="w-full flex justify-center p-2 md:p-4">
            <QuestionInput addMessage={addMessage} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConversationContainer;
