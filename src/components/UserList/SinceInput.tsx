import React from 'react';
import { SinceProps } from '../../interfaces/UserListProps/SinceProps';

const SinceInput: React.FC<SinceProps> = ({ since, setSince }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSinceString = event.target.value;

    if (newSinceString.trim() === '') {
      setSince(0); 
    } else {
      if (/^\d*$/.test(newSinceString)) {
        setSince(parseInt(newSinceString, 10));
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={since.toString()}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SinceInput;
