import { Grid, HStack, Image, Divider, Flex, Box, Icon, Text, Stack, VStack} from "@chakra-ui/react"
import flask from './whitelogo.png'
import secondStyles from './SecondComp.module.css'
function SecondComp() {
    return (
        <Box position="absolute" className={secondStyles.container} >
            <HStack paddingTop="7%" spacing="10rem">
          
            <Box  className={secondStyles.textcontainer} align="left" color="white">
                    <Text fontWeight="bold" fontSize="3rem">Building Data</Text>
                    <Text fontWeight="bold" fontSize="3rem">Driven Solutions.</Text>
                    <Text fontSize="2rem">
                            Big Data Big Impact is a Georgia Tech Student that is focused on creating a social impact.
                    </Text>
             
                   
                </Box>
                <Image  src={ flask } boxSize="20%" paddingRight="5%"/> 
                
            </HStack> 

      
        </Box>
    );
}



export default SecondComp;