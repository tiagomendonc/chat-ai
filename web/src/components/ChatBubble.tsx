type ChatBubbleProps = {
  message: string;
  isUser: boolean;
};

function ChatBubble({ message, isUser }: ChatBubbleProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      {!isUser && (
        <img
          className="w-8 h-8 rounded-full mr-2"
          src="https://placekitten.com/40/40"
          alt="Avatar"
        />
      )}
      <div
        className={`max-w-xl px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-900 rounded-bl-none'
        }`}
      >
        {message}
      </div>
      {isUser && (
        <img
          className="w-8 h-8 rounded-full ml-2"
          src="https://placekitten.com/40/40"
          alt="Avatar"
        />
      )}
    </div>
  );
}

export default ChatBubble;
