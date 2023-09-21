import React from 'react'
import VinaImage from "../svgs/Vina.jpeg"

import MiguelImage from "../svgs/Miguel.jpeg"

import VictorImage from "../svgs/Victor.jpeg"
import "../styles/Us.css"

const Us = () => {
    return (
        <>
            <section className='us'>
                <article className='who'>
                    <h1>E quem somos nós ?</h1>
                </article>
                <article className='images'>
                    <h3>Vinicius Henrique</h3>
                    <img src={VinaImage} height="200" width="200"/>
                    
                    <h3>Miguel Henrique</h3>
                    <img src={MiguelImage} height="200" width="200"/>
                    
                    <h3>Victor Reis</h3>
                    <img src={VictorImage} height="200" width="200"/>
                </article>
            </section>
        </>
    )
}

export default Us;