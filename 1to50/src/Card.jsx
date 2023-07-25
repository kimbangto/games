import { useState } from 'react';

function Card(props) {
  const [value, setValue] = useState(props.value);

  const changeValue = () => {
    if (props.target === value) {
      if (value + 25 <= 50) {
        setValue((prev) => prev + 25);
      } else {
        setValue('');
      }
      props.increment();
    }
  };

  return (
    <div
      key={props.index}
      onClick={changeValue}
      className={value === '' ? 'inactive' : 'active'}
    >
      {value}
    </div>
  );
}

export default Card;
