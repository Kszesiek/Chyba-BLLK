import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableNativeFeedback } from 'react-native';

import LoanRowInput from './Components/LoanRowInput';
import {componentPairsDict, createLoanText} from './Labels/LoanLabels';

const defaultLoanMap = {
  "name": "this is name",
  "value": 0,
  "interest": 0,
  "commission": 0,
  "months": 12,
}

export default function App() {
  const [myLoans, setMyLoans] = useState([]); // lista wszystkich aktualnych kredytów
  const loanComponents = {};                           // słownik składowych nowego kredytu. key: property_name
  // const loanComponentsChangeHandler = {};              // słownik funkcji obsługujących zmianę wartości składowych
                                                       // nowego kredytu. key: property_name
  const addNewLoan = () => {                           // realizuje dodanie nowego kredytu do listy kredytów
    const newLoan = {key: Math.random().toString()};   // tworzy słownik wartości, w którym klucze to property_name
    Object.keys(componentPairsDict).forEach((component) =>
    {
      newLoan[component] = loanComponents[component].value;
    } );
    
    setMyLoans( myLoans => [ ...myLoans, newLoan ] )
  };

  Object.keys(componentPairsDict).forEach((component) =>  // uzupełnianie loanComponents i loanComponentsChangeHandler
  {
    const [value, setValue] = useState(defaultLoanMap[component]);
    loanComponents[component] = {value, setValue};
  } );

  const loanComponentsChangeHandler = (passedValue, component) =>
  {
    loanComponents[component].setValue(passedValue);
    console.log('new value of ' + component + ' is: ' + passedValue);
  };

  const removeLoanHandler = (loanKey) =>
  {
    console.log('removing loan ' + loanKey + '...');
    return myLoans.filter( (loan) => loan.key !== loanKey);
  }

  return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        { Object.keys(componentPairsDict).map((compName) =>   // LoanRowInput dla każdego komponentu kredytu
          <View style={styles.row} key={compName}>
            <LoanRowInput
              label={componentPairsDict[compName][0]}
              defaultValue={componentPairsDict[compName][1]}
              onChangeValue={value => loanComponentsChangeHandler(value, compName)}
            />
          </View>
        ) }
        </View>


        <FlatList         // wyświetlanie listy kredytów
          data={myLoans}
          renderItem={loan => (
            <TouchableNativeFeedback activeOpacity={0.8} onLongPress={() => removeLoanHandler(loan.key)}>
              <View style={styles.listItem} >
                { Object.keys(componentPairsDict).map((component) =>
                  <Text key={component} >{componentPairsDict[component][0] + loan.item[component]}</Text>
                ) }
              </View>
            </TouchableNativeFeedback>
          ) }
        />

        <View style={styles.bottom}>
          <Button title={createLoanText} onPress={addNewLoan}/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#424242',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
      width: '90%',
    },
    bottom: {
      margin: 30,
      alignContent: 'flex-end',
      width: '40%',
    },
    inputContainer: {
      marginVertical: 30,
      marginHorizontal: 0,
      width: '100%',
    },
    listItem: {
      padding: 6,
      margin: 5,
      backgroundColor: '#ffc68a',
      width: '100%',
    }
  }
);
