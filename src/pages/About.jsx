import React from 'react';
import "../styles/About.css"

const About = () => {
  return (
  
    <>
        <section className='about'>
            <article className='content'>
                <h2>Mas o que é o  <span style={{color:"var(--green-color)", textTransform:"uppercase"}}>Semeia.AI</span> ?</h2>
                <p>Acreditamos que cada estudante tem o potencial de criar um impacto positivo na sociedade. Junte-se a nós nesta jornada de descoberta, inovação e crescimento.</p>
            </article>
        </section>
    </>
    );
}

export default About;