import Logo from '../assets/icons/logo.svg';
import TrashIcon from '../assets/icons/trash.svg';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  clearAllMessages: () => void;
};

function Header({ clearAllMessages }: HeaderProps) {
  const navigate = useNavigate();

  const handleClick = (): void => {
    clearAllMessages();
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center h-12 px-4 md:px-32 bg-white shadow mb-1">
      <div className="hover:cursor-pointer" onClick={handleClick}>
        <img src={Logo} alt="Logo" className="h-4" />
      </div>
      <div className="flex p-8 hover:cursor-pointer" onClick={handleClick}>
        <img src={TrashIcon} className="mr-2" />
        <button className="text-gray-600 font-medium hover:text-gray-900">
          Limpar Chat
        </button>
      </div>
    </div>
  );
}

export default Header;
