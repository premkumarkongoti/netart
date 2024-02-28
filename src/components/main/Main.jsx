import React, { useState, useEffect } from 'react';
import styles from './Main.module.css'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/1.png'
import logo2 from '../../assets/2.png'
import logo3 from '../../assets/3.png'

function Main() {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {screenSize.width < 800 ? (
        <div>
          {
            <>
            <div className={styles.mainmob}>
            <div>
            <img src={logo} className={styles.logomob} alt="Main Logo" />
            </div>
          
            <div className={styles.containermob}>
            <div className={styles.rightcontainermob}>
            <img src={logo1} className={styles.logo1mob} alt="Secondary Logo" />
            </div>
            <div className={styles.leftcontainermob}>
            <p className={styles.para1mob}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul>
            <li className={styles.para2mob}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li className={styles.para2mob}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src={logo2} alt='third logo' className={styles.logo2mob} />
            <p className={styles.para2mob}>Government of India has awarded the <span className={styles.highlight}>"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
            </div>
            
            <div className={styles.container2mob}>
            <p className={styles.para2mob}>	INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <img src={logo3} className={styles.logo3mob} alt='fourth logo'/>
            <p className={styles.para2mob}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <div className={styles.redLinemob}></div>
            </div>
            <div className={styles.bottomcontainermob}>
            <p className={styles.para1mob}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <p className={styles.para2mob}>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>

            </div>
            <footer className={styles.footermob}>
            <div>Toll free:1800 200 1234</div>
            <div>www.facebook.com/crtpumps</div>
            <div>www.crtgroups.com</div>

            </footer>
            </div>
            
            </>

          }
        </div>
      ) : (
        <div>
          {
            <>
            <div className={styles.main}>
            <div>
            <img src={logo} className={styles.logo} alt="Main Logo" />
            </div>
          
            <div className={styles.container}>
            <div className={styles.rightcontainer}>
            <img src={logo1} className={styles.logo1} alt="Secondary Logo" />
            </div>
            <div className={styles.leftcontainer}>
            <p className={styles.para1}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul>
            <li className={styles.para2}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li className={styles.para2}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src={logo2} alt='third logo' className={styles.logo2} />
            <p className={styles.para2}>Government of India has awarded the <span className={styles.highlight}>"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
            </div>
            
            <div className={styles.container2}>
            <p className={styles.para2}>	INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <img src={logo3} className={styles.logo3} alt='fourth logo'/>
            <p className={styles.para2}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <div className={styles.redLine}></div>
            </div>
            <div className={styles.bottomcontainer}>
            <p className={styles.para1}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <p className={styles.para2}>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>

            </div>
            <footer className={styles.footer}>
            <div>Toll free:1800 200 1234</div>
            <div>www.facebook.com/crtpumps</div>
            <div>www.crtgroups.com</div>

            </footer>
            </div>
            
            </>
            
          }
        </div>
      )}
    </>
  );
}

export default Main;
