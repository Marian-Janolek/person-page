import './toggle.css';
import Sun from '../../assets/sun.png';
import Moon from '../../assets/moon.png';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : '25px' }}
      ></div>
    </div>
  );
};

export default Toggle;
