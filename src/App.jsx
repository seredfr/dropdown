import Dropdown from './components/Dropdown';
import './App.css';

const menuItems = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out'
];

function App() {
  return (
    <div className="container">
      <Dropdown 
        items={menuItems}
        defaultItem="Profile Information"
        buttonText="Account Settings"
      />
    </div>
  );
}

export default App;