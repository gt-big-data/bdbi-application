import { Grid, Flex, Box, Text} from "@chakra-ui/react"
import headStyle from './Header.module.css'
import {Link} from 'react-router-dom';
function Header() {
    return (
      <Flex className={headStyle.headContainer}>
        <Grid className={headStyle.headLinks}>
              <Box w="100%" h="10" bg="white">
                <Link to="/about"> 
                  <Text className={headStyle.aboutText}>About</Text>
                </Link>
              </Box>
              <Box w="100%" h="10" bg="white">
              <Link to="/projects"> 
                  <Text className={headStyle.projectsText}>Projects</Text>
              </Link>
              </Box>

            <Box w="100%" h="10" bg="white">
            <Link to="/events"> 
                  <Text className={headStyle.eventsText}>Events</Text>
            </Link>
            </Box>
        </Grid>
        <Flex className={headStyle.applyBox}>
            Apply
        </Flex>
        <Flex className={headStyle.logoBox}/>
        <Flex className={headStyle.logoWords}>
            <Box position="relative" left="20px">Big Data</Box>
            <Box position="relative" left="-130px" top="50px" color="#44A6DE">Big Impact</Box>
        </Flex>
      </Flex>
    );
  }

  export default Header;