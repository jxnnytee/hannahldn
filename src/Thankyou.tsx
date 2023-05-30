import { Box, Text, Center, Heading, Button, Image, Link } from "@chakra-ui/react"



function Thankyou() {

    return (
    <Center 
    bgImg={'../images/ma1.jpg'}
  
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'50vh', md: '100vh'}} fontSize={'lg'}   fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box>
        <Box p={5} pt={200}>
        <Heading  fontSize={{ base:'4xl', md: '7xl', lg: '8xl'}} 
         color={'whitesmoke'}
        textShadow={'0px 0px 10px white'}
        fontWeight={'lighter'} >
            Message Sent
        </Heading>
        <Center>
            <Text mt={10} fontSize={'lg'} textShadow={'0px 0px 20px white'} color={'whitesmoke'}>We will be in touch shortly</Text>
               
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              
                </Center>
                
            <Box p={5}>
                <Link href="/">
        <Button fontSize={'md'} fontWeight={'semibold'} 
        bgColor={'whitesmoke'} p={5} 
        color={'black'}
        rounded={'12'}
        mt={20}
        _hover={{ bg: 'black', color: 'white' }}
        
        fontFamily={'Poppins'}>RETURN TO HOMEPAGE</Button>
        </Link>
        <Box>
            <Box pt={20}>
                <Center>
            <Image  w={10} h={20} src={'../images/downer.gif'} transform={'rotate(180deg)'} />
            </Center>
            </Box>
        </Box>
        </Box>
        </Center>
          
           
            
        </Box>
        

    
    </Box>
    </Center>

    )
        

}

export default Thankyou;