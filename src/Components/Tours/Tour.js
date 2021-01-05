import React from 'react';
import Onetour from './oneTour';

const Tour = ({tours,ubArr}) => {
    // const {tours} = props
    return (
        
        <>
            {tours.map((result) => {
                console.log(result)
             return (
                <Onetour key={result.id} res={result} ubArr={ubArr} />
             )
            })}
        </>
        
      )
}
export default Tour