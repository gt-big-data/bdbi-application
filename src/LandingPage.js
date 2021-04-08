import { Grid, Divider, Flex, Box, Icon, Text, Stack, VStack} from "@chakra-ui/react"
import SecondComp from "./SecondComp"
import AboutSection from "./AboutSection"
import BDBICalendar from "./BDBICalendar"
import Sponsors from "./Sponsors"
import Contact from "./Contact"

function LandingPage() {
    return (
        <>
            <SecondComp/>
            <AboutSection />
            <BDBICalendar /> 
            <Sponsors />
            <Contact />
            

        </>

    );
}



export default LandingPage;