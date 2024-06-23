import QuestionInput from './QuestionInput';
import ChatBubble from './ChatBubble';

function ConversationContainer() {
  return (
    <div className="flex flex-col justify-end min-h-screen p-3 w-screen">
      <div className="flex flex-col space-y-4 mb-4 px-16">
        <ChatBubble message="Olá" isUser={true} />
        <ChatBubble message="Olá, como vai?" isUser={false} />
      </div>
      <div className="flex items-end justify-center w-full">
        <QuestionInput />
      </div>
    </div>
  );
}

export default ConversationContainer;
