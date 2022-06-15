import React from 'react';

function Shop() {

    /*
        Um ein fehler zu vermeiden wird ein script element erst in dem Dom zugefügt
        sobald /shop geöffnet wird.
    */
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "https://dmm-fitness.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js";
    document.body.appendChild(js);
    
    return (
        < div id="myShop" >
            <a href="https://dmm-fitness.myspreadshop.de">DMM.Fitness SHOP</a>
        </div >
    )
}

export default Shop