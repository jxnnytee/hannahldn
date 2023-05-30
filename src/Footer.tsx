import { Box, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box pt={20} mb={-20} bgColor={'black'}>
            <Box borderTop={'1px gray solid'} p={5}>
                <Text textAlign={'center'} fontFamily={'Poppins'} color={'whitesmoke'}>
                © 2023 Hannah London Beauty
                </Text>
            </Box>
        </Box>

    )
}

export default Footer;