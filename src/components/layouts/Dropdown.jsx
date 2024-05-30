import { Link } from "react-router-dom";

function Dropdown({ subnavigate }) {
  return (
    <Link to={subnavigate.path}>
      <div className="subroute">
        <li className="subroute_item">
          <div>
            <span>{subnavigate.icon}</span>
            <span className="itemname">{subnavigate.name}</span>
          </div>
        </li>
      </div>
    </Link>
  );
}
export default Dropdown;
