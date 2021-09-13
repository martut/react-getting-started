import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Button() {
    const [counter, setCounter] = useState(5);
    return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
  );  