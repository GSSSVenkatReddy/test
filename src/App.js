import './App.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
];

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <TestHeading heading={{text: 'test', size: 1}} />
      
      <MyButton />

      <TestImage />

      <ShoppingList />
      
      <TestHeading heading={{text: 'Counters that update seperately', size: 2}} />
      <ButtonWithState /><br />
      <ButtonWithState />

      <TestHeading heading={{text: 'Counters that update together', size: 1}} />
      <ButtonWithHook count={count} onClick={handleClick}/><br />
      <ButtonWithHook count={count} onClick={handleClick}/>
    </div>
  );
}

function TestHeading({heading}) {
  if(heading.size === 1) {
    return(
      <h1>{heading.text}</h1>
    );
  }
  if(heading.size === 2) {
    return(
      <h2>{heading.text}</h2>
    );
  }
}

function TestImage() {
  return(
    <div>
      <h2>{user.name}</h2>

      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>I'm a button</button>
  );
}

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return(
    <ul>{listItems}</ul>
  );
}

function ButtonWithState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function ButtonWithHook({ count, onClick }) {
  return(
    <button onClick={onClick}>
      Clicked {count} times.
    </button>
  );
}

export default App;