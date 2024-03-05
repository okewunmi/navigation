"use client"

import styled from "styled-components";

export const Wrapper = styled.div`
background: #283618;
width: 4rem;
margin-left:1rem;
padding: 1.5rem 0 ;
display: flex;
flex-direction: column;
align-items: center;
height:96%;
color: #ffff;
border-radius: 2rem;
align-self: center;
/* border-bottom-left-radius: 1.2rem;
border-top-left-radius: 1.5rem; */

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

.link{
    font-weight: 500;
    font-size: 1.25rem;
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .2rem;
    transition: all .4s;

   
    &:hover{
        background: #606c38 ;
        border-radius: 100%;
        transform :scale(1.3) ;
    }
   .profile{
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    background: green;
  

   } 
}
    
    header{
        height: 20%;
        display: flex;
        gap:.5rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .logo{
       font-size: 2.3rem;
       margin-bottom:2.5rem;
    }

}
`

