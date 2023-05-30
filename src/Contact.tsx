import { Box, Button, Center, Input, Text, Image, Textarea } from "@chakra-ui/react";
import { useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate()
  const form = useRef(null); 
  

  const sendEmail = (e: any) => {
    e.preventDefault();
  
    emailjs.sendForm('service_yy54r7e', 'template_7kj3oc9', e.target, '32JodH7Khscah0NUv')
      .then((result: any) => {
          console.log(result.text);
          navigate('/thankyou'); // Navigate to /success after successful form submission
      }, (error: any) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <Box bgColor={"black"} fontFamily={"Poppins"}>
        <Center>
          <Box
            w={"100%"}
            minH={{ base: "50vh", md: "100vh" }}
            bgImage={"../images/ma2.jpg"}
            bgRepeat={"none"}
            bgPos={"center"}
            bgSize={"cover"}
            
           
          >
            <Box px={{ base: 0, md: 500}}>
            <Text
              fontFamily={"Poppins"}
              pt={70}
              color={"whitesmoke"}
              
              fontSize={"4xl"}
              fontWeight={"light"}
             
              textShadow={'0px 0px 20px white'}
            >
              GET IN TOUCH
            </Text>
            <form ref={form} onSubmit={sendEmail}>
            <Box p={4}>
              <Box
                w={"100%"}
                borderRadius={20}
                textAlign={"start"}
                color={"whitesmoke"}
                bgColor={"transparent"}
                p={5}
                fontWeight={'light'}
                textShadow={'0px 0px 10px white'}
                h={"100%"}
              >
                <Text pb={1}>NAME</Text>
                <Input type="text" name="name" borderRadius={0} placeholder={"First Name"} />
            
                <Text pb={1} pt={5}>PHONE NUMBER</Text>
                <Input type="number" name="phonenumber" maxLength={11} borderRadius={0} placeholder={"Phone Number"} />
                <Text pb={1} pt={5}>EMAIL</Text>
                <Input name="email" borderRadius={0} type="text" placeholder={"Email"} />
                <Text pb={1} pt={5}>MESSAGE</Text>
                <Textarea name="message" borderRadius={0}></Textarea>
                
                <Button type="submit" value={'send'} color={'whitesmoke'} mt={5} size={'lg'} w={'100%'} bgColor={'brown'}>
                    SEND
                </Button>
                
                <Box mt={20} w={'100%'} alignItems={'center'}>
                <Center>
            <Image w={10} mt={20} h={20} transform='rotate(180deg)' src={'../images/downer.gif'} />
            </Center>
            </Box>
           
              </Box>
              </Box>
              </form>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}

export default Contact;
