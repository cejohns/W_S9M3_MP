
import useLocalStorage from './useLocalStorage'; // Import useLocalStorage


const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false); // Use useLocalStorage hook

  return [darkMode, setDarkMode];
};

export default useDarkMode;