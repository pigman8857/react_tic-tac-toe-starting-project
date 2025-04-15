import { useState } from "react";

export default function Player({initialName,symbol, isActive, onChangeName}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  

  const handleEditClick = () => {
    setIsEditing((wasEditing) => !wasEditing);

    if(isEditing){
      onChangeName(symbol, playerName);
    } 
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  let editablePlayName = <span className="player-name">{playerName}</span>

  if(isEditing){
    editablePlayName = <input type="text" required value={playerName} onChange={handleChange}></input>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}