import { Grid, Flex, Box, Text, Button, VStack, Image, HStack} from "@chakra-ui/react"
import headStyle from './Header.module.css'
import {Link} from 'react-router-dom';
function Header() {
    return (
      <Flex className={headStyle.headContainer} as="nav" justify="space-between">
         <Flex className={headStyle.logoWords}>
          <Image src="image1.png"/>

     
          <VStack 
          align="left">
            <Box>Big Data</Box>
            <Box  color="#44A6DE">Big Impact</Box>
          </VStack>
        
        </Flex>
        <Flex marginRight="2%" >

          <HStack spacing={8}>
          <Box className={headStyle.headLinks}  w="100%" h="10" >
                <Link to="/about"> 
                  <Text>About</Text>
                </Link>
              </Box>
              <Box className={headStyle.headLinks}  w="100%" h="10" >
              <Link to="/projects"> 
                  <Text className={headStyle.projectsText}>Projects</Text>
              </Link>
              </Box>

            <Box className={headStyle.headLinks}   w="100%" h="10" >
            <Link to="/events"> 
                  <Text className={headStyle.eventsText}>Events</Text>
            </Link>
            </Box>

          </HStack>
             
        </Flex>

       
      </Flex>
    );
  }

  export default Header;