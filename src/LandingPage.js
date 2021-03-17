import { Grid, Divider, Flex, Box, Icon, Text, Stack, VStack} from "@chakra-ui/react"
import SecondComp from "./SecondComp"
import AboutSection from "./AboutSection"

import secondStyles from './SecondComp.module.css'
function LandingPage() {
    return (
        <>
            <SecondComp/>
            <AboutSection />

        </>

    );
}



export default LandingPage;