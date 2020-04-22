import React from "react";
import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";
import "./style.css";
const fadeAnimation = keyframes`${fadeIn}`

const Fade1 = styled.div`animation: 8s ${fadeAnimation}`
const Fade2 = styled.div`animation: 3s ${fadeAnimation}`




function DashHome(props){
    return(
        <div> 
            <h3>Hello</h3>


        </div>
    )
}



export default DashHome