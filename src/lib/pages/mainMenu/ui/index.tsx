import { Link } from "react-router-dom";

export default function MainMenuScreen() {
  return (
    <div>
      <h1>Guild Master</h1>
      <ul>
        <li>
          <Link to="/game">New game</Link>
        </li>
        <li>
          <Link to="/load">Load game</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
