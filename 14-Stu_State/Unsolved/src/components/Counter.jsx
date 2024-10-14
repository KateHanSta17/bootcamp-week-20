import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// The export default keyword is used to export a single class, function or primitive from a script file.
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // The useState hook is a function that returns an array with two elements. The first element is the current state value, 
  // and the second element is a function that lets you update it.
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // The handleIncrement function is called when the increment button is clicked. It increments the count by 1.
  // The setCount function is used to update the count state.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // The handleDecrement function is called when the decrement button is clicked. It decrements the count by 1.
  // The setCount function is used to update the count state.
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      // We are passing the count, handleIncrement, and handleDecrement functions as props to the CardBody component.
      // The count prop is used to display the current count value.
      // The handleIncrement prop is used to increment the count value.
      // The handleDecrement prop is used to decrement the count value.
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
