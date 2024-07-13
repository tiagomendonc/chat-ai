import ChatAiIcon from '../assets/icons/chatAi.svg';
import ChatUserIcon from '../assets/icons/chatUser.svg';
import CopyIcon from '../assets/icons/copy.svg';
import CheckIcon from '../assets/icons/check.svg';
import { Message } from '../types/Message';
import { getMessageInfo } from '../utils/getMessageInfo';
import { useState } from 'react';
import { PENDING_SYSTEM_MESSAGE_ID } from '../constants/systemMessage';
import Loader from './Loader';

type ChatBubbleProps = {
  message: Message;
};

function ChatBubble({ message }: ChatBubbleProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const { text, isUser } = message;

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    } catch (error) {
      console.error('Error copying text to clipboard:', error);
    }
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      {!isUser && (
        <img
          className="w-8 h-8 rounded-full mr-2"
          src={ChatAiIcon}
          alt="Avatar"
        />
      )}
      <div className="flex flex-col">
        <div
          className={`max-w-xl px-4 py-2 rounded-lg flex justify-center ${
            isUser
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-gray-200 text-gray-900 rounded-bl-none'
          }`}
        >
          {message.id !== PENDING_SYSTEM_MESSAGE_ID ? text : <Loader />}
        </div>
        <div
          className={`flex ${
            isUser ? 'justify-end' : 'justify-start'
          } text-xs text-gray-500 mt-1`}
        >
          {getMessageInfo(message)}
          {!isUser && (
            <>
              {!isCopied && (
                <img
                  src={CopyIcon}
                  className="ml-2 hover:cursor-pointer"
                  alt="Copy Icon"
                  onClick={copyToClipBoard}
                  title="Copiar"
                />
              )}
              {isCopied && (
                <img
                  src={CheckIcon}
                  className="ml-2 hover:cursor-pointer"
                  alt="Copied Icon"
                />
              )}
            </>
          )}
        </div>
      </div>

      {isUser && (
        <img
          className="w-8 h-8 rounded-full ml-2 hover:cursor-pointer"
          src={ChatUserIcon}
          alt="Avatar"
        />
      )}
    </div>
  );
}

export default ChatBubble;
