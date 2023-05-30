import { Box, HStack, Text, Center, Divider, Link } from "@chakra-ui/react"


function Navbar() {

    return (
    <Center fontSize={'lg'} display={{ base: 'none', md: 'flex'}} fontWeight={'normal'} fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box p={5}>
            
        <HStack fontSize='sm' spacing={20} color={'whitesmoke'}>
           <Link href="/">
            <Text>HOME</Text>
            </Link>
            <Divider h={'100%'} orientation="vertical" />
            <Link href="booking">
            <Text>BOOK</Text>
            </Link>
            <Divider h={'100%'} orientation="vertical" />
            <Link href="contact">
            <Text>CONTACT</Text>
            </Link>
           
        </HStack>
    
    </Box>
    </Center>

    )
        

}

export default Navbar;