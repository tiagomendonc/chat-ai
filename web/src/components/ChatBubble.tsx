import ChatAiIcon from '../assets/icons/chatAi.svg';
import ChatUserIcon from '../assets/icons/chatUser.svg';
import CopyIcon from '../assets/icons/copy.svg';
import { Message } from '../types/Message';
import { getMessageInfo } from '../utils/getMessageInfo';

type ChatBubbleProps = {
  message: Message;
};

function ChatBubble({ message }: ChatBubbleProps) {
  const { text, isUser } = message;

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
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
          className={`max-w-xl px-4 py-2 rounded-lg ${
            isUser
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-gray-200 text-gray-900 rounded-bl-none'
          }`}
        >
          {text}
        </div>
        <div
          className={`flex ${
            isUser ? 'justify-end' : 'justify-start'
          } text-xs text-gray-500 mt-1`}
        >
          {getMessageInfo(message)}
          {!isUser && (
            <>
              <img
                src={CopyIcon}
                className="ml-2 hover:cursor-pointer"
                alt="Copy Icon"
                onClick={copyToClipBoard}
                title="Copiar"
              />
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
