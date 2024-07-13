import { useNavigate } from 'react-router-dom';

type SuggestionBoxProps = {
  text: string;
  icon: string;
  addMessage: (text: string, isUser: boolean) => void;
};

function SuggestionBox({ text, icon, addMessage }: SuggestionBoxProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col bg-white min-w-60 max-w-80 p-4 rounded-lg shadow-md mb-2 mr-2.5 hover:cursor-pointer h-[114px]"
      onClick={() => {
        addMessage(text, true);
        navigate('/new-conversation');
      }}
    >
      <img src={icon} alt="Icon" className="h-6 w-6 mr-2 mb-2" />
      <p className="text-gray-800 text-sm">{text}</p>
    </div>
  );
}

export default SuggestionBox;
