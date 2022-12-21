import "./Aboutus.css";
import React from 'react';
import CompanyImage from '../assets/images/Company.png'


const Aboutus = () => {
    return (
    <div className="infocontainer">
          <div>
            <h1>About Us</h1>
          <p className="info">
          Vi är ett härligt gäng vänner som har en passion för glasögon.  
          Vi bestämde oss för att lansera en e-handel med fokus på unika glasögon till ett shysst pris där kvalite är i fokus.
          Specula Design föddes ur vår passion för kvalite, tillit och tron på långsiktiga kundrelationer med service i fokus. 
          Vi har alltid uppskattat glasögon och deras förmåga till att ge en bättre skärpa, självkänsla och vara den trogna accessoaren som kan följa med till varje tillfälle. 
          Det är kring dessa värden som vi har byggt upp vår affärsverksamhet.
          <br></br><br></br>
          
          Vår ambition är att förse dig med ett par schyssta bågar som du kommer känna stolthet att bära. 
          Det vi också hoppas på, är att den bågen du väljer blir en del av din livshistoria. 
          Det kan kanske vara en gåva till någon som står dig nära, ett par bågar vars design du letat efter till själv eller för att hålla dig till trenden.
          Ibland är livets resa komplicerad och ibland är den enkel, men dina glasögon kommer alltid att förse dig med samma självkänsla när du tar de på dig.
          <br></br><br></br>
          Nu vill vi hjälpa dig hitta de solglasögonen eller glasögonen, som speglar just din livsberättelse och det finns ingen bättre plats att göra det på, än här på Specula Design. 
          </p>
          <h5>
          Varmt välkommen.
          </h5>

          </div>
    
    
          <h1>Meet our team</h1>
          <div className="grid-container">

      <div className="column">
        <div className="card">
          <img src="img1.jpg" alt="Staff" style={{ width: '100%' }} />
          <div className="container">
            <h2>Nicolai Stahl </h2>
            <p className="title">NicoMeck</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>SpeculaDesign@gmail.com</p>
            <p>
            <button className="button">Contact</button>
            </p>
          </div>
        </div>
      </div>

    <div className="column">
      <div className="card">
        <img src="img1.jpg" alt="Staff" style={{ width: '100%' }} />
        <div className="container">
          <h2>Tim Eslövs</h2>
          <p className="title">Final Boss</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>SpeculaDesign@gmail.com</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="img1.jpg" alt="Staff" style={{ width: '100%' }} />
        <div className="container">
          <h2>Mustafa TopG</h2>
          <p className="title">Malmes pågasnöre</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>Admin@gov.uae</p>
          <p>
            <button className="button">Contact</button>
          </p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="img1.jpg" alt="Staff" style={{ width: '100%' }} />
        <div className="container">
          <h2>Elvis Borgström</h2>
          <p className="title">Snobben</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>SpeculaDesign@gmail.com</p>
          <p>
            <button className="button">Contact</button>
          </p>
          </div>
        </div>
      </div>
    </div>
      
      <div>
      <div className="companyimage">
        <img src={CompanyImage} alt="company" />
      </div>
      </div>
    </div>
    
    


  );
};
  
  export default Aboutus;