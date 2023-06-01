import { Box, HStack, Text, Center, Heading, Button, Image, Link } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `

function Hero() {
    

    return (
    <Center 
    bgImg={'../images/mm2.jpg'}
   
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'100vh', md: '100vh'}} fontSize={'lg'}   fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box>
        <Box p={5}>
        <Heading  fontSize={{ base:'9xl', md: '7xl', lg: '300'}} 
            color={'whitesmoke'}
       
        animation={`${fadeIn} 2s`}
        
        fontWeight={'bold'} >
            HLB
        </Heading>
        <Center>
                
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              <HStack borderBottom={'1px solid white'} animation={`${fadeIn} 2s`} fontFamily={'serif'}  textShadow={'0px 0px 30px black'}>
                <Text fontWeight={'normal'} fontSize={{ base: 'lg', md: '4xl'}} color={'whitesmoke'}>
                    HANNNAH LONDON BEAUTY
                </Text>
               
               
             
                </HStack>
                
                </Center>
                
            <Box p={5}>
                <Link href="/booking">
        <Button fontSize={{ base: '2xl', md: '5xl'}} fontWeight={'bold'} 
      
        color={'black'}
        rounded={'12'}
        
        padding={{base: '30px', md: '50px 100px 50px 100px'}}
        borderRadius={'full'}
        _hover={{ bg: 'black', color: 'white' }}
        animation={`${fadeIn} 2s`}
        fontFamily={'Poppins'}>BOOK NOW</Button>
        </Link>
        <Box>
            <Box pt={20}>
                <Center>
            <Image animation={`${fadeIn} 10s`}  w={10} h={20} src={'../images/downer.gif'} transform={'rotate(180deg)'} />
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

export default Hero;