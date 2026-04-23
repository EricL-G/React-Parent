import { useNavigate } from 'react-router-dom';

const StartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
    >
      Start
    </button>
  );
};
export default StartButton;