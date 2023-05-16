import React, { useState } from 'react';

// Parent component
const ParentComponent = () => {
  const [additionResult, setAdditionResult] = useState('');
  const [subtractionResult, setSubtractionResult] = useState('');
  const [divisionResult, setDivisionResult] = useState('');

  return (
    <div>
      <p>The result of addition is: {additionResult}</p>
      <p>The result of subtraction is: {subtractionResult}</p>
      <p>The result of division is: {divisionResult}</p>

      <AdditionComponent setAdditionResult={setAdditionResult} />
      <SubtractionComponent setSubtractionResult={setSubtractionResult} />
      <DivisionComponent setDivisionResult={setDivisionResult} />
    </div>
  );
};

// Addition component
const AdditionComponent = ({ setAdditionResult }) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleAddition = () => {
    const result = number1 + number2;
    setAdditionResult(result);
  };

  return (
    <div>
      <h3>Addition</h3>
      <input
        type="number"
        value={number1}
        placeholder='0'
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        placeholder='0'
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
<br></br>
      <button onClick={handleAddition}>Add Numbers</button>
    </div>
  );
};

// Subtraction component
const SubtractionComponent = ({ setSubtractionResult }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleSubtraction = () => {
    const result = number1 - number2;
    setSubtractionResult(result);
  };

  return (
    <div>
      <h3>Subtraction</h3>
      <input
        type="number"
        placeholder='0'
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        placeholder='0'
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      /><br></br>
      <button onClick={handleSubtraction}>Subtract Numbers</button>
    </div>
  );
};

// Division component
const DivisionComponent = ({ setDivisionResult }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleDivision = () => {
    const result = number1 / number2;
    setDivisionResult(result);
  };

  return (
    <div>
      <h3>Division</h3>
      <input
        type="number"
        placeholder='0'
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        placeholder='0'
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
      <br></br>
      <button onClick={handleDivision}> Divide Numbers</button>
    </div>
  );
};


const App = () => {
  return <ParentComponent />;
};

export default App;
