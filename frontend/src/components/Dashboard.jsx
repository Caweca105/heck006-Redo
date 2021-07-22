import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Dashboard.module.css';
import { Link } from 'react-router-dom';

function Dashboard() {

  const [bootcamp, setBootcamps] = useState([])
  useEffect(() => {

    setBootcamps()
    
  }, []);
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <div className={styles.Container}>
        <div  className={styles.Profile}>
          <Link to="/profile">Perfil</Link>
        </div>
        <div className={styles.ContainerMain}>
          <div className={styles.Main}>Conteudo</div>
          <div className={styles.Support}>
            <form action="https://www.seg-social.pt/inicio" target="_blank">
              <input type="image" value="Seg Social" src="/images/segsocial.png" />
            </form>
            <form action="https://www.portaldasfinancas.gov.pt/at/html/index.html" target="_blank">
              <input type="image" value="Portal das Finanças" src="/images/financas.png"/>
            </form>
            <form action="https://iefponline.iefp.pt/IEFP/index2.jsp" target="_blank">
              <input type="image" value="IEFP" src="/images/IEFP.png"/>
            </form>
          </div>
        </div>
        {/* {
          Bootcamps.map((bootcamp, index) => {
            return (
              <Link to={`/bootcamp/${bootcamp._id}`}>
              <div className={styles.Bootcamp}>
                <div className={styles.card}>
                  <img src="/images/lecapsule_js.png" />
                  <div className={styles.container}>
                    <h4>{bootcamp.name}</h4>
                  </div>
                </div>
                </div>
              </Link>

            )
          })
        } */}
        <div className={styles.Content}>
          <div className={styles.ContentTitle}>
            <Link to="/bootcamp"><h2>Bootcamps</h2></Link> 
            <div className={styles.Bootcamp}>
              <div className={styles.card}>
                <img src="/images/lecapsule_js.png" />
                <div className={styles.container}>
                  <h4>Le capsule</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/b4f_js.png" />
                <div className={styles.container}>
                  <h4>Bytes4Future</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/ironhack_js.jpg" />
                <div className={styles.container}>
                  <h4>Ironhack</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ContentTitle}>
            <Link to="/jobs"><h2>Empregos</h2></Link>
            <div className={styles.Jobs}>
              <div className={styles.card}>
                <img src="/images/sapo_js.png" />
                <div className={styles.container}>
                  <h4>Sapo Empregos</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/adecco_js.png" />
                <div className={styles.container}>
                  <h4>Adecco</h4>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/indeed_js.png" />
                <div className={styles.container}>
                  <h4>Indeed</h4>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
