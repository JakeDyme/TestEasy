import React from 'react';
import ActionArgParam from './ActionArgParam'

const ActionArgParamList = props => {
    const params = [
        {   
            name: "x-coord", 
            value: 12
        },
        {   
            name: "y-coord", 
            value: 23
        },
    ]

    return (
        <div>
            {params.map((param) => {
                return (<ActionArgParam param={param}></ActionArgParam>)
            })}
        </div>
    )
}

export default ActionArgParamList;