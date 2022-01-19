import React, { useState } from 'react';
import styles from '../styles/Home.module.css'


interface Props {
  name: string,
  icon: string
}

const Example: React.FC<Props> = function({
 name,
 icon
}) {
  return (
    <div className= {styles.contactCard}>
     Example
    </div>
  )
}
export default Example;