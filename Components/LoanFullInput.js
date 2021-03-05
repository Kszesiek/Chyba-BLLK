import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";
import LoanRowInput from "./LoanRowInput";

/*
const LoanFullInput = props => {
    const loanComponents = {};                           // słownik składowych nowego kredytu. key: property_name
    const loanComponentsInputHandler = {};               // słownik funkcji obsługujących zmianę wartości składowych
                                                         // nowego kredytu. key: property_name
    Object.keys(props.componentsDict).forEach((component) =>  // uzupełnianie loanComponents i loanComponentsInputHandler
    {
        const [value, setValue] = useState(props.defaultMap[component]);
        loanComponents[component] = {value, setValue};
        loanComponentsInputHandler[component] = passedValue =>
        {
            loanComponents[component].setValue(passedValue);
            console.log('new value of ' + component + ' is: ' + passedValue);
        };
    } );

    return (
    <View style={styles.inputContainer}>
        { Object.keys(props.componentsDict).map((compName) =>   // LoanRowInput dla każdego komponentu kredytu
          <View style={styles.row} key={compName}>
              <LoanRowInput
                label={props.componentsDict[compName][0]}
                defaultValue={props.componentsDict[compName][1]}
                onChangeValue={props.inputHandler[compName]}
              />
          </View>
        ) }
    </View>
    ) }

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        margin: 5,
        backgroundColor: '#ffc68a',
    }
});

export default LoanFullInput;

 */