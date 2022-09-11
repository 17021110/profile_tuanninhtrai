import React from 'react'
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Image,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Script from 'next/script'

const SKill: NextPage = () => {
const [active, setActive] = React.useState('item_0');
const [activeContent, setActiveContent] = React.useState('content_0');
const [begin, setbegin] = React.useState('');

 const handleNextPage = React.useCallback(() => {
        
        let newNumber = Number(active.split('_')[1]) + 1;
        if(newNumber>2) {
          setActive('item_0');
          setActiveContent('content_0');

        }
        else {
          setActive(`item_${newNumber}`);
          setActiveContent(`content_${newNumber}`);
        }
        setbegin('show_effect_v1');
        setTimeout(function (){
           setbegin('');
        }, 6000)

  }, [active])


   const handlePrePage = React.useCallback(() => {
        
        let newNumber = Number(active.split('_')[1]) - 1;
        if(newNumber<0) {
          setActive('item_2');
          setActiveContent('content_2');

        }
        else {
          setActive(`item_${newNumber}`);
          setActiveContent(`content_${newNumber}`);
        }
        setbegin('show_effect_v1');
        setTimeout(function (){
           setbegin('');
        }, 6000)

  }, [active])



  return (
    <Box className="body-sos">
      <Container  p={4} maxW="container.lg" className="container" >

       <Script src="../scripts/Globals.js" />
         <Box className="bg-rotate"></Box>
        <Box className={`effect ${begin}`}>
            <Box className="hand1"></Box>
            <Box className="hand2"></Box>
            <Box className="wall-left"></Box>
            <Box className="wall-right"></Box>
            <Box className="dots">
                <Box className="item"></Box>
                <Box className="item"></Box>
                <Box className="item"></Box>
                <Box className="item"></Box>
            </Box>
        </Box>
       
        <Box className="list_img">
            <Box className={`item ${active==='item_0' ? "active" : "hide_item"}`} id="item_0">
               <Image
              alt="Profile Image"
              src="/img3.png"
            />
            </Box>
            <Box className={`item ${active==='item_1' ? "active" : "hide_item"}`} id="item_1">
                <Image
              alt="Profile Image"
              src="/img1.png"
            />
            </Box>
            <Box className={`item ${active==='item_2' ? "active" : "hide_item"}`} id="item_2">
               <Image
              alt="Profile Image"
              src="/img2.png"
            />
            </Box>
        </Box>
        <Box className="content">
            <Box className={`item ${activeContent==='content_0' ? "active" : "hide_item"}`} id="content_0">
                <h2>Tran Van Tuan</h2>
               <p> Tinh ru anh di chay pho <br/>
                Chua kip chay pho <br/>
                Ma anh chay mat tieu <br/></p>
               <p>
                <Button>ADD TO CART</Button>
               </p>
            </Box>
            <Box className={`item ${activeContent==='content_1' ? "active" : "hide_item"}`} id="content_1">
                <h2>Tran Van Tuan</h2>
               <p> Tinh ru anh di chay pho <br/>
                Chua kip chay pho <br/>
                Ma anh chay mat tieu <br/></p>
               <p>
                <Button>ADD TO CART</Button>
               </p>
            </Box>
            <Box className={`item ${activeContent==='content_2' ? "active" : "hide_item"}`} id="content_2">
                <h2>Tran Van Tuan</h2>
               <p> Tinh ru anh di chay pho <br/>
                Chua kip chay pho <br/>
                Ma anh chay mat tieu <br/></p>
               <p>
                <Button>ADD TO CART</Button>
               </p>
            </Box>
        </Box>
       
        <Box className="next">
            <Button onClick={()=>handlePrePage()} id="prev">
                <Image
                alt="Profile Image"
                src="/iconleft.png"
              />
            </Button>
            <Button onClick={()=>handleNextPage()} id="next">  
              <Image
                alt="Profile Image"
                src="/iconright.png"
              />
            </Button>
           </Box>
    </Container></Box>
    
  );
};

export default SKill;