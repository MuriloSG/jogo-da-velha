import React from "react";
import './styles.css';
import Card from "../../objects/card/index.js";
import Player from "../../objects/player/index";
const Hash = () => {
    return(
        <Card>
            <ul className="hash">
                <li className="item"><Player player ="o"/></li>
                <li className="item"><Player player ="x"/></li>
                <li className="item"><Player player ="o"/></li>

                <li className="item"><Player player ="o"/></li>
                <li className="item"><Player player ="x"/></li>
                <li className="item"><Player player ="x"/></li>

                <li className="item"><Player player ="o"/></li>
                <li className="item"><Player player ="x"/></li>
                <li className="item"><Player player ="x"/></li>
            </ul>
        </Card>
    );
}

export default Hash;