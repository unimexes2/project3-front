import CarouselBasement  from "../components/carousel";

import protectlogo from "../pictures/protectora.png"
function Main() {
 
 
 
    return (
      
      <div className="main-container">
   
          <div className="container1">
           
            <img className="imagetext" src={protectlogo}/>
              <h4 className="main-text">L'associació Amics dels Animals de Palafolls és una entitat sense ànim de lucre constituida al 
                2007 amb el propòsit de donar atenció a aquells gossos i gats que han estat abandonats a Palafolls i proporcinar-los-hi una nova llar i siguin tractats de la manera que els corresponen: amb atenció i estima.
Som voluntaries que realitzem aquesta tasca desinteressadament, 
invertint el nostre temps personal intentant sol·lucionar els problemes dels abandonaments,
 maltractaments i accidents dels animals de la nostra població. </h4>
                  
  
          </div>
  
  
        <div>
  
       </div>
       






<CarouselBasement/>



       
       
  
  
      </div>
    );
  }
  
  export default Main;
  