import { Grid, Divider, Flex, Box, Icon, Text, Stack, VStack} from "@chakra-ui/react"
import SecondComp from "./SecondComp"
import AboutSection from "./AboutSection"
import BDBICalendar from "./BDBICalendar"
import secondStyles from './SecondComp.module.css'
function LandingPage() {
    return (
        <>
            <SecondComp/>
            <AboutSection />
            <BDBICalendar /> 

        </>

    );
}



export default LandingPage;