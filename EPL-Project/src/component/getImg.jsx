/**
 * @file getImg.jsx
 * @description This file imports logo images for various teams and organizes them into an object for easy access.
 * The `logos` object is exported as the default export for use in other parts of the application.
 *
 * @author Hyung-seop Lee
 * @date Jan.2.2025
 *
 * Usage:
 * Import this file wherever team logos are needed:
 * import logos from './logos';
 * Access a specific logo using its key: example => logos['ARS'];
 */

import logo1 from "/src/img/logo/ARS.png";
import logo2 from "/src/img/logo/AVL.png";
import logo3 from "/src/img/logo/BHA.png";
import logo4 from "/src/img/logo/BOU.png";
import logo5 from "/src/img/logo/BRE.png";
import logo6 from "/src/img/logo/CHE.png";
import logo7 from "/src/img/logo/CRY.png";
import logo8 from "/src/img/logo/EVE.png";
import logo9 from "/src/img/logo/FUL.png";
import logo10 from "/src/img/logo/IPS.png";
import logo11 from "/src/img/logo/LEI.png";
import logo12 from "/src/img/logo/LIV.png";
import logo13 from "/src/img/logo/MCI.png";
import logo14 from "/src/img/logo/MUN.png";
import logo15 from "/src/img/logo/NEW.png";
import logo16 from "/src/img/logo/NFO.png";
import logo17 from "/src/img/logo/SOU.png";
import logo18 from "/src/img/logo/TOT.png";
import logo19 from "/src/img/logo/WHU.png";
import logo20 from "/src/img/logo/WOL.png";

const logos = {
    ARS: logo1,
    AVL: logo2,
    BHA: logo3,
    BOU: logo4,
    BRE: logo5,
    CHE: logo6,
    CRY: logo7,
    EVE: logo8,
    FUL: logo9,
    IPS: logo10,
    LEI: logo11,
    LIV: logo12,
    MCI: logo13,
    MUN: logo14,
    NEW: logo15,
    NFO: logo16,
    SOU: logo17,
    TOT: logo18,
    WHU: logo19,
    WOL: logo20,
};

export default logos;
