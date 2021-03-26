import { Grid, Divider, Flex, Box, Icon, Text, Stack, VStack} from "@chakra-ui/react"
import aboutStyles from './AboutSection.module.css'
import flask from './flask.png'
function AboutPage() {
    return (
        <Box marginTop="90vh"  className={aboutStyles.container} > 
            
           <Text align="center" fontWeight="bold" fontSize="3rem"  color="#108dd2" paddingTop="10%">About Us</Text>
                <Box  className={aboutStyles.textcontainer} color="#108dd2">
                 
                    <Box >
                    <Text align="left" fontSize="2rem">
                    We are a student organization of the College Of Computing at Georgia Tech. <br></br>  <br></br> We are an educational, project-based organization focused on using data pipelining, analysis, and visualization techniques to make social impact.
                    </Text>

                    </Box>
                    
               
             
                   
                </Box>
        </Box>
    );
}



export default AboutPage;