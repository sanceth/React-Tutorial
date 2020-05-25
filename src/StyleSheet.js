import React from 'react'
import './index.css'
import styles from './style.module.css'

function StyleSheet() {
    const party ={
        fontSize : '100px',
        color : 'pink'
    }
    return (
        <div> 
            <h1 style={{color : 'red'}}>Error</h1> {/*inline styling*/}
            <h1 className="success fnt-50px">Success</h1> {/*class name stying */}
            <h1 className={styles.blue}>Inline Blue</h1> {/*css module styling*/}
            <h1 style={party}>CSS in JS</h1> {/*Css in js styling */}
        </div>
    )
}

export default StyleSheet
