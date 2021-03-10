import { Grid, Flex, Box, Icon, Text, Stack} from "@chakra-ui/react"
import secondStyles from './SecondComp.module.css'
function SecondComp() {
    return (
        <Box>
            <Flex className={secondStyles.container}>
                <Icon data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={secondStyles.shapefill}></path>
                </Icon>
            </Flex>
            <Box className={secondStyles.textcontainer}>
                <Stack spacing={3}>
                    <Text>Building Data</Text>
                    <Text position="relative" left="70px" marginBottom="100px">Driven Solutions.</Text>
                </Stack>
                <Stack>
                    <Text fontSize="50px" left="34px" position="relative" fontWeight="normal">
                        Big Data Big Impact is a Georgia
                    </Text>
                    <Text fontSize="50px" left="22px" position="relative" top="-40px" fontWeight="normal">
                        Tech Student Organization That
                    </Text>
                </Stack>
            </Box>
        </Box>
    );
}



export default SecondComp;