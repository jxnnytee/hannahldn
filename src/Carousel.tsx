import React from 'react';
import { Box, IconButton, useBreakpointValue, Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    './images/hlb1.jpeg',
    './images/hlb2.jpeg',
    './images/hlb3.jpeg',
    './images/hlb4.jpeg',
    './images/hlb5.jpeg',
    './images/hlb6.jpeg',
    './images/hlb7.jpeg',
    './images/hlb8.jpeg',
    './images/hlb9.jpeg',
    './images/hlb10.jpeg',
  ];

  return (
    <Box
      position={'relative'}
      bgColor={'black'}
      mb={20}
      p={{base: 0, md: 0 }}
      
      overflow={'hidden'}>
        <Text
              fontFamily={"Poppins"}
              p={10}
              color={"whitesmoke"}
              
              fontSize={"4xl"}
              fontWeight={"light"}
             
              textShadow={'0px 0px 10px white'}
            >
              MY WORK
            </Text>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        bgColor={'white'}
        color={'black'}
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        bgColor={'white'}
        color={'black'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={{ base: 60, md: '600' }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
