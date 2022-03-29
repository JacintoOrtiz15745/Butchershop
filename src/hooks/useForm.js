import React, {useState} from 'react';
import {View, Text} from 'react-native';

export default (initialState, onSubmit) => {
    const [inputs, setInputs] = useState(initialState);

    const suscribe = field => value => {
        setInputs({...inputs, [field]: value})
    }

    const handleSubmit = () => {
        onSubmit(inputs)
    }

    return {suscribe, handleSubmit, inputs };
};
 
