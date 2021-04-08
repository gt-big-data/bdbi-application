import { Grid, Flex, Box, Text, Image} from "@chakra-ui/react"
import aboutcss from './About.module.css'
import aayush from './aayush.jpg'
import vamsi  from './vamsi.jpg'
import chawla from './chawla.jpg'
import tanishq from './tanishq.jpg'
import sakshi from './sakshi.JPG'
import abhi from './abhi.png'
import patrick from './patrick.png'
import pranav from './pranav.png'
// import 

function About() {
  
    return (
      <Box position="absolute" className={aboutcss.container} marginTop="15vh" paddingTop="2rem">
         <Text fontWeight="bold"  color="white" fontSize="3rem">Executive Board</Text>
         <Grid padding="2rem" templateColumns="repeat(4, 1fr)" gap={6}>
          <Box className={aboutcss.card} borderColor="gray.400" > 
            <Image className={aboutcss.cardImage} src={vamsi}>


            </Image>
            <Text  fontWeight="bold"  fontSize="2rem">Vamsi Desu</Text>
            <Text  fontSize="1.5rem">President</Text>
          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
            <Image className={aboutcss.cardImage} src={tanishq}>


            </Image>
            <Text fontWeight="bold"  fontSize="2rem">Tanishq Sandhu</Text>
            <Text  fontSize="1.5rem">Vice President</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
            <Image className={aboutcss.cardImage} src={sakshi}>


            </Image>
            <Text fontWeight="bold"  fontSize="2rem">
              Sakshi Deshpande
            </Text>
            <Text  fontSize="1.5rem">Director of Marketing</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
            <Text fontWeight="bold"  fontSize="2rem">
              Rithik Gavvala 
            </Text>   
            <Text  fontSize="1.5rem">Director of Sponsorship</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
      
            <Text fontWeight="bold"  fontSize="2rem">
              Edmund Xin

            </Text>
            <Text  fontSize="1.5rem">Data Visualization Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4">
          <Image className={aboutcss.cardImage} src={abhi}>


</Image> 
            <Text fontWeight="bold"  fontSize="2rem">
              Abhi Joshi

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 

            <Text fontWeight="bold"  fontSize="2rem">
              Rahul Rajan

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400"  bg="#f4f4f4"> 
          <Image className={aboutcss.cardImage} src={patrick}>


</Image> 
            <Text fontWeight="bold"  fontSize="2rem">
              Patrick Liu

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
          <Image className={aboutcss.cardImage} src={pranav}>


</Image> 
            <Text fontWeight="bold"  fontSize="2rem">
              Pranav Khorana

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
          <Image className={aboutcss.cardImage} src={chawla}>


          </Image>
            <Text fontWeight="bold"  fontSize="2rem">
              Rahul Chawla

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
            <Text fontWeight="bold"  fontSize="2rem">
              Sanket Manjesh

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
            <Text fontWeight="bold"  fontSize="2rem">
              Mithil Verma

            </Text>
            <Text  fontSize="1.5rem">Project Lead</Text>

          </Box>
          
          <Box className={aboutcss.card} borderColor="gray.400" bg="#f4f4f4"> 
            <Text fontWeight="bold"  fontSize="2rem">
              Siddharth Balireddy

            </Text>
            <Text  fontSize="1.5rem">Product Manager</Text>

          </Box>
       
        </Grid>     
      </Box>


    );
  }

export default About