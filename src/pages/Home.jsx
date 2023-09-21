import React from 'react';
import "../styles/Home.css";
import SeedSVG from "../svgs/seeding.svg";

const Home = ({className, id}) => {
  return (
    <>
        <section className='home'>
            <article className='content'>
                <h1>Seja muito bem-vindo ao <span style={{color:"var(--green-color)"}}>Semeia.AI</span></h1>
                <img src={SeedSVG} height="280" width="280" />  
            </article>
        </section>
    </>
  );
}

export default Home;