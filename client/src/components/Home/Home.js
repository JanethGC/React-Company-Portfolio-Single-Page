import React from 'react';
import './home.css';
import Typewriter from "typewriter-effect";

const Home = () => {

    return(
        <div className="container-fluid home">
            <div className="container home-content">

                <h1>
                    <Typewriter
                        options={{
                            
                            strings:["Javascript",
                                    "React",
                                    "Frontend Developer",
                                    "MySql",
                                    "PHP",
                                    "Web Developer"
                                    ],
                            autoStart: true,
                            loop:true,
                            delay:50
                        }}
                    />
                </h1>
                <p>
                    Estudiante de ingenieria en Ciencias Computacionales, con enfasis en Desarrollo de Software.
                    Disfruto el desarrollo Frontend mas que el Backend. En el ambito laboral me he podido desenvolver en ambos campos ya que tuve la oportunidad de trabajar como desarrolladora junior.
                    <br/>
                    Me considero una persona carismática, sociable, responsable y tolerante.
                    

                </p>
                <span className='view-details-home-button'> Ver detalles</span>


            </div>
        
        </div>

    );



}

export default Home;