import { IoSend } from 'react-icons/io5';

function QuestionInput() {
  return (
    <div className="relative w-3/4">
      <input
        type="text"
        placeholder="O que você quer saber?"
        className="border-2 border-gray-500 rounded-lg p-4 h-12 w-full"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200">
          <IoSend className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default QuestionInput;
