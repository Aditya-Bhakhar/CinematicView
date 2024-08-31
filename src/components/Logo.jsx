
import logo from '../assets/logo.webp'; // Import the logo

function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-10 w-10" />
    </div>
  );
}

export default Logo;
