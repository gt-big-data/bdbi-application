import { Grid, Divider, Flex, Box, Icon, Text, Stack, VStack} from "@chakra-ui/react"
import secondStyles from './SecondComp.module.css'
function SecondComp() {
    return (
        <Box position="absolute" className={secondStyles.container} >  
                <Box className={secondStyles.textcontainer} align="left" color="#108dd2">
                    <Text fontWeight="bold" fontSize="3rem">Building Data</Text>
                    <Text fontWeight="bold" fontSize="3rem">Driven Solutions.</Text>
                    <Text fontSize="2rem">
                            Big Data Big Impact is a Georgia Tech Student that is focused on creating a social impact.
                    </Text>
             
                   
                </Box>
        </Box>
    );
}



export default SecondComp;