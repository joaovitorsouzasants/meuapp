import React from 'react';
import{
    TouchableOpacity, Text
} from 'react-native';

import {styles} from './style'
export function Button( {title, ...rest }){
   return( <TouchableOpacity 
      style={styles.button}
      {...rest}
      >
      <Text style={styles.buttonText}>
      {title}
      </Text>
    </TouchableOpacity>
   );
}