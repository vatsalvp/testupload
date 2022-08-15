import React,{useState} from 'react'
import styled from 'styled-components'
import { BsChevronUp } from "react-icons/bs";

export default function ScrollToTop() {

  const[scrollState ,setScrollSet]=useState(false)

  const toTop = () =>{
    window.scrollTo({top:0});
  };

  window.addEventListener("scroll",()=>{
    window.pageYOffset >300 ? setScrollSet(true):setScrollSet(false)
  })
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
        <BsChevronUp/>
    </ToTop>
  )
}
const ToTop =styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
    bottom: 75px;
    right: 30px;
    margin: 0px;
    color: #fff;
    background: #3f9fff;
    border: 1px solid #3f9fff;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 40px;
    border-radius: 0px;
  svg {
    transition: 0.6s ease-in-out;
    color: white;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
    line-height: 50px;
  }
`;