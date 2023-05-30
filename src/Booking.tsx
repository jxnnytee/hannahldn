import { Box, Button, Center, Input, Text, Image, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";



function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate()
  const form = useRef(null); 

  const sendEmail = (e: any) => {
    e.preventDefault();
    e.target.datetime.value = selectedDate;
  
    emailjs.sendForm('service_yy54r7e', 'template_x1cfatu', e.target, '32JodH7Khscah0NUv')
      .then((result: any) => {
          console.log(result.text);
          navigate('/'); // Navigate to /success after successful form submission
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
              BOOKING
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
                textShadow={'0px 0px 20px white'}
                h={"100%"}
              >
                <Text pb={1}>FIRST NAME</Text>
                <Input name="firstname" type="text" borderRadius={0} placeholder={"First Name"} />
                <Text pb={1} pt={5}>LAST NAME</Text>
                <Input name="lastname" type="text" borderRadius={0} placeholder={"Last Name"} />
                <Text pb={1} pt={5}>PHONE NUMBER</Text>
                <Input name="phonenumber" type="number" maxLength={11} borderRadius={0} placeholder={"Phone Number"} />
                <Text pb={1} pt={5}>EMAIL</Text>
                <Input name="email" borderRadius={0} type="text" placeholder={"Email"} />

                <Text pb={1} pt={5}>DETAILS</Text>
                <Textarea name="message" mt={1}></Textarea>
                <Text pb={1} fontWeight={'medium'} pt={5}>DATE & TIME</Text>
                <Box color={'black'} p={2} borderRadius={5} w={'100%'}>
                <Text pb={1} mb={2} mt={2} fontSize={'md'} color={'white'} fontWeight={'bold'}>Tap to pick a date & time below:</Text>
                <Box mb={5}>
            <Image  w={10} h={10} src={'../images/aro.webp'} />
            </Box>
                <Box bgColor={'white'} borderRadius={20} p={2}>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: any) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  placeholderText="Select a date and time"
                />
                </Box>
                <input type="hidden" name="datetime" value={selectedDate || ""} />
                </Box>
                <Button type="submit" value={'send'} color={'blackAlpha.800'} mt={5} size={'lg'} w={'100%'} bgColor={'whitesmoke'}>
                    BOOK
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

export default Booking;
