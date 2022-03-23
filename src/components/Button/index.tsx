import React from 'react';
import{
    TouchableOpacity, Text, TouchableOpacityProps
} from 'react-native';
interface ButtonProps extends TouchableOpacityProps{
   title: string;
}
import {styles} from './style'
export function Button( {title, ...rest }:ButtonProps){
   return( 
   <TouchableOpacity 
      style={styles.button}
      {...rest}
      >
      <Text style={styles.buttonText}>
      {title}
      </Text>
    </TouchableOpacity>
   );
}