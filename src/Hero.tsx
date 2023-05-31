import { Box, HStack, Text, Center, Heading, Divider, Button, Image, Link } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `

function Hero() {
    

    return (
    <Center 
    bgImg={'../images/ma1.jpg'}
  
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'100vh', md: '100vh'}} fontSize={'lg'}   fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box>
        <Box p={5}>
        <Heading  fontSize={{ base:'4xl', md: '7xl', lg: '8xl'}} 
         color={'whitesmoke'}
        textShadow={'0px 0px 20px white'}
        animation={`${fadeIn} 2s`}
        fontWeight={'lighter'} >
            HANNAHLONDON
        </Heading>
        <Center>
        <Text 
        mt={-7}

            color={'white'}
            fontFamily={'Dancing Script'}
            animation={`${fadeIn} 2s`}
            textShadow={'0px 0px 20px white'}
            fontSize={{ base:'4xl', md: '7xl', lg: '8xl' }}
             fontWeight={'bold'} >
            Beauty
            </Text>            
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              <HStack animation={`${fadeIn} 2s`}  textShadow={'0px 0px 20px white'}>
                <Text color={'whitesmoke'}>
                    HAIR
                </Text>
                <Divider ml={2} mr={2} h={4} orientation="vertical" />
                <Text color={'whitesmoke'}>
                    MAKEUP
                </Text>
                <Divider ml={2} mr={2} h={4} orientation="vertical" />
                <Text color={'whitesmoke'}>
                    BEAUTY
                </Text>
                </HStack>
                </Center>
                
            <Box p={5}>
                <Link href="/booking">
        <Button fontSize={'md'} fontWeight={'semibold'} 
        bgColor={'whitesmoke'} p={5} 
        color={'black'}
        rounded={'12'}
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