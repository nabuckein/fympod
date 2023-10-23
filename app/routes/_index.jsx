
import {
    Link,
    Meta,
    Outlet,
    Scripts,
    LiveReload
  } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json } from "@remix-run/node"; // or cloudflare/deno
import y from "../styles/index.css";
import ytIcon from "../img/youtube_icon.png";
import tiktokIcon from "../img/tiktok_icon.png";
import instaIcon from "../img/insta_icon.png";
import emailIcon from "../img/email_icon.png";
import { motion } from "framer-motion";
//const axios = require('axios');

export async function loader(request) {
    const apiUrl = "https://api-football-v1.p.rapidapi.com/v3/timezone";
    const res = await fetch(apiUrl, {
      method:"GET",
      headers: {
        'X-RapidAPI-Key': '79b54bab6emshde13d0564984fbap15c837jsn1ca4f5d2837c',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
}
  

export function links(){
    return [
        
        { rel: "stylesheet", href: y },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Abel&family=Acme&family=DM+Sans:opsz,wght@9..40,100;9..40,300&family=DM+Serif+Display:ital@0;1&family=Oswald:wght@300&family=Permanent+Marker&family=Rowdies:wght@300;400;700&family=Russo+One&family=Urbanist:ital,wght@0,200;1,100&family=Yanone+Kaffeesatz:wght@200;400;700&display=swap"},
        
    ]
}

export default function Home(){

    const iconDiv = {
        visible: { opacity: 1 },
        hidden: { opacity: 1 },
      }
      
      const iconText = {
        visible: { opacity: 1},
        hidden: { opacity: 0},
      }
      
    return(
        <div className="index">
            <div className="mainTitleDiv">
                <div className="mainTitleIconsDiv">
                    
                    <motion.div initial="hidden" whileHover="visible" variants={iconDiv} className="iconsDiv">
                        <img className="icons" src={ytIcon}/>
                        <a className="iconLink" href="https://www.youtube.com/@Futbolymaspodcast/about">
                            <motion.p variants={iconText} className="iconText">Youtube</motion.p>
                        </a>
                    </motion.div>
                    
                    <motion.div initial="hidden" whileHover="visible" variants={iconDiv} className="iconsDiv">
                        <img className="icons" src={tiktokIcon}/>
                        <a className="iconLink" href="https://www.youtube.com/@Futbolymaspodcast/about">
                            <motion.p variants={iconText} className="iconText">Tik Tok</motion.p>
                        </a>
                    </motion.div>

                    
                    <motion.div initial="hidden" whileHover="visible" variants={iconDiv} className="iconsDiv">
                        <img className="icons" src={instaIcon}/>
                        <a className="iconLink" href="https://www.youtube.com/@Futbolymaspodcast/about">
                            <motion.p variants={iconText} className="iconText">Instagram</motion.p>
                        </a>
                    </motion.div>

                    
                    <motion.div initial="hidden" whileHover="visible" variants={iconDiv} className="iconsDiv">
                        <img className="icons" src={emailIcon}/>
                        <a className="iconLink" href="https://www.youtube.com/@Futbolymaspodcast/about">
                            <motion.p variants={iconText} className="iconText">Email Us</motion.p>
                        </a>
                    </motion.div>

                </div>
                <div className="mainTitleText">
                    <h1 className="mainTitleH1">Fútbol Y Más</h1>
                    <h1 className="mainTitleH2">El Podcast</h1>
                </div>
                
            </div>

            <div className="cardsDiv">   
            
                <motion.div whileHover={{ scale: 1.025 }} className="estadisticasDiv card">
                    <div className="estadisticasTitleDiv">
                        <h1 className="estadisticasTitle cardTitle">Estadísticas</h1>
                    </div>
                    <div className="estadisticasSubtitleDiv cardSubtitleDiv">
                        <h2 className="estadisticasSubtitle cardSubtitle">Goleadores</h2>
                    </div>
                    <div className="estadisticasContent">
                        <div className="estadisticasTextDiv">
                            <p className="estadisticasText">Serhou Guirassy - Stuttgart</p>
                        </div>
                        <div className="estadisticasTextDiv">
                            <p className="estadisticasText">Lautaro Martinez - Inter</p>
                        </div>
                        <div className="estadisticasTextDiv">
                            <p className="estadisticasText">Erling Haaland - Manchester City</p>
                        </div>
                        <div className="estadisticasTextDiv">
                            <p className="estadisticasText">Harry Kane - Bayern Munich</p>
                        </div>
                        <div className="estadisticasTextDiv">
                            <p className="estadisticasText">Jude Bellingham - Real Madrid</p>
                        </div>
                    </div>
                </motion.div>                

                <motion.div whileHover={{ scale: 1.025 }} className="episodesDiv card">
                    <div className="episodesTitleDiv">
                        <h1 className="episodesTitle cardTitle">Episodios Recientes</h1>
                    </div>
                    <div className="episodesContent">
                        <iframe className="episodeIFrame" src="https://www.youtube.com/embed/fl9AD-HwByQ?si=kzxmUmMOX6doeG7Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe className="episodeIFrame" src="https://open.spotify.com/embed/episode/0xHqwzuu2Yce5X7MyA5AZw?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                    
                    </div>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.025 }} className="upcomingDiv card">
                    <div className="upcomingTitleDiv">
                        <h1 className="upcomingTitle cardTitle">Próximamente</h1>
                    </div>
                    <div className="upcomingSubtitleDiv cardSubtitleDiv">
                        <h2 className="upcomingSubtitle cardSubtitle">UEFA Champions League</h2>
                    </div>
                    <div className="upcomingContent">
                        <div className="upcomingTextDiv">
                            <p className="upcomingText">Galatasaray vs Bayern Munich</p>
                        </div>
                        <div className="upcomingTextDiv">
                            <p className="upcomingText">Sevilla vs Arsenal</p>
                        </div>
                        <div className="upcomingTextDiv">
                            <p className="upcomingText">PSG vs Milan</p>
                        </div>
                        <div className="upcomingTextDiv">
                            <p className="upcomingText">Newcastle vs B. Dortmund</p>
                        </div>
                        <div className="upcomingTextDiv">
                            <p className="upcomingText">Feyenoord vs Lazio</p>
                        </div>
                    </div>                  

                </motion.div>

                <motion.div whileHover={{ scale: 1.025 }} className="preguntaDiv card">
                    <div className="preguntaTitleDiv">
                        <h1 className="preguntaTitle cardTitle">Preguntas de la semana</h1>
                    </div>
                    <div className="preguntaSubtitleDiv cardSubtitleDiv">
                        <h2 className="preguntaSubtitle cardSubtitle">1) Que jugador fue mejor técnico?</h2>
                        <h2 className="preguntaSubtitle cardSubtitle">2) Que técnico fue mejor jugador?</h2>
                        <h2 className="preguntaSubtitle cardSubtitle">(Se discutirán en el próximo episodio)</h2>
                    </div>
                    <div className="preguntaContent">
                        <div className="preguntaInputDiv">
                            <input className="preguntaInput"/>  
                        </div>
                        <div className="preguntaButtonsDiv">
                            <button className="buttons clearButtons">Clear</button>
                            <button className="buttons submitButtons">Submit</button>

                        </div>
                    </div>
                </motion.div>
                
            </div>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )

}