import { Box, HStack, Text, Center, Heading, Divider, Button, Image, Link } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
  `

function Pricing() {
    

    return (
    <Center 
    bgImg={'../images/mua2.jpg'}
  
    bgRepeat={'none'} bgPos={'center'}
    bgSize={'cover'}
     minH={{ base:'100vh', md: '100vh'}} fontSize={'lg'}   fontFamily={'Poppins'} bgColor={'black'} w={'100%'}>
            <Box>
        <Box p={5}>
       
        <Center>
        <Text fontWeight={'normal'} fontSize={'xx-large'} pb={5} color={'whitesmoke'}>PRICING</Text>
            </Center>
            <Center display={'block'}  fontSize={{ base:'md', md: '2xl', lg: '2xl' }}>
            <Center>
              <HStack p={4} border={'1px solid white'} animation={`${fadeIn} 2s`} fontFamily={'Poppins'}  textShadow={'0px 0px 0px white'}>
                
                <Text align={'start'} fontSize={{ base: 'lg', md: 'lg', lg: 'lg'}} color={'whitesmoke'}>
                

                </Text>
               
               
             
                </HStack>
                
                </Center>
                
            <Box p={5}>
                
       
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

export default Pricing;