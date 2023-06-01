import { Box, Center, Text, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import 'react-datepicker/dist/react-datepicker.css';







function Booking() {
  
 


  const openBookingPopup = () => {
    window.open("https://hannahlondonbeauty.dayschedule.com/", "_blank");
  };

// ...


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  


  return (
    <>
      <Box bgColor={"black"} fontFamily={"Poppins"}>
        <Center>
          <Box
            w={"100%"}
            minH={{ base: "100vh", md: "100vh" }}
            bgRepeat={"none"}
            bgPos={"center"}
            bgSize={"cover"}
          >
            <Box px={{ base: 0, md: 500}}>
            <Text
              fontFamily={"Poppins"}
              pt={10}
              color={"whitesmoke"}
              fontSize={"4xl"}
              fontWeight={"light"}
              textShadow={'0px 0px 20px white'}
            >
              BOOKING
            </Text>
            <Text p={8} fontWeight={'light'} fontSize={'sm'} color={'whitesmoke'}>Secure your spot by booking today. You will be redirected to the booking page</Text>
           <Box p={5}>
           <Button onClick={openBookingPopup} fontSize={{ base: '2xl', md: '5xl'}} fontWeight={'bold'} 
      
      color={'black'}
      rounded={'12'}
      
      padding={{base: '30px', md: '50px 100px 50px 100px'}}
      borderRadius={'full'}
      _hover={{ bg: 'black', color: 'white' }}
      
      fontFamily={'Poppins'}>BOOK NOW</Button>

                </Box>
                
          </Box>
        </Box>
        </Center>
      </Box>
    </>
  );
}

export default Booking;

