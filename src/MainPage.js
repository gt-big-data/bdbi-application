

import React from 'react';
import {Box, HStack, Flex, Link, Heading, Image} from '@chakra-ui/react'
import Logo from './bdbi.png'

function MainPage() {
    return(
        <Box
            width="100%"
            height="100vh"

        
        >
        {/* header */}
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
                bg="#3182CE"
                color="white"
                height="20%"
            >
                <HStack>
                    <Box>
                        <Image
                        borderRadius="24px"
                        boxSize="100px"
                        objectFit="cover"
                        src={Logo}
                        alt="Logo"
                        />


                    </Box>
                    <Box>

                        <Flex align="center" mr={5} height="100%">
                        <Link to="/">
                        <Heading as="h1" letterSpacing={'-.05rem'}>
                            Big Data Big Impact
                        </Heading>
                        </Link>
                        </Flex>


                    </Box>
             
            



                </HStack>
                <Box
                    height="50%"
                    bg="#8DD6FF"

                >

                </Box>
         
        
        </Flex>

    
     
    

        </Box> 
    );

}


 export default MainPage;