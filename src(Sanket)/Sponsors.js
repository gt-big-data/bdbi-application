import spons from './Sponsors.module.css';
import logo from './Logo.module.css';
import mic from './microsoft.png';

function Sponsors() {
    return(
        <div className = {spons.Sponsors}>
            <h1>Sponsors</h1>
                <div className={logo.logo}>
                    <div className={logo.gridItem}>
                        <img src={mic}></img>
                    </div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>
                    </div>
        </div> 
           


// /* Mask Group */


// position: absolute;
// width: 309.42px;
// height: 305.85px;
// left: 310.94px;
// top: 4728.18px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


// /* Mask Group */


// position: absolute;
// width: 486.74px;
// height: 359.4px;
// left: 1448.65px;
// top: 4702px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


// /* Mask Group */


// position: absolute;
// width: 620.03px;
// height: 224.92px;
// left: 1183.26px;
// top: 5172.08px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


// /* Mask Group */


// position: absolute;
// width: 760.45px;
// height: 224.92px;
// left: 280px;
// top: 5172.08px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


// /* Mask Group */


// position: absolute;
// width: 703.33px;
// height: 264.2px;
// left: 707.23px;
// top: 4749.6px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
        
    );
}

export default Sponsors;