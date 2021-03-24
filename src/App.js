import logo from './logo.svg';
import './App.css';
import {Box, Image, Flex, Link, Heading }from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import DataVizTable from './DataVizTable'
import MainPage from './MainPage'
import Blob from './blob.svg'
import Logo from './bdbi.png'
import BDBICalendar from './MyCalendar'

function App() {
  return(
    <>
      <MainPage />
      
      <BDBICalendar/>


    </>

  );          
}

export default App;
