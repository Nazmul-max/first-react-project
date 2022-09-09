import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';

const Home = () => {
    const [count, setCount] = React.useState(0);
    // console.log(count)

    const clickHandler = () => {
        setCount(count +1)
    }

    return (
        <div className='container pt-5'>
            <h2>This is home {count}</h2>
            <button onClick={() => clickHandler()} className='m-1 INC'>Increment</button>
            <button onClick={() => setCount(count-1)} className='m-1 DNC'>Decrement</button>
        </div>
    );
};

export default Home;