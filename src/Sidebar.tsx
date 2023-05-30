import { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  VStack,
} from '@chakra-ui/react';
import './Card.css'
import { RiMenu2Line } from'react-icons/ri';



export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base:'flex', md: 'none'}} fontFamily={'Poppins'} bgColor={'black'} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'none' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bgImage={'../images/ma2.jpg'}
      
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      fontFamily={'Poppins'}
      
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text textShadow={'0px 0px 10px white'} color={'whitesmoke'} fontSize="lg" ml="8" fontFamily="Poppins" fontWeight="light">
        HANNAH LONDON BEAUTY
      </Text>
      
        <CloseButton ml={-20} color={'white'} display={{ base: 'flex', md: 'none' }}  onClick={onClose} />
      </Flex>
      <VStack p={50} borderTop={'0.5px white solid'} fontSize={'2xl'} textShadow={'0px 0px 10px white'} color={'whitesmoke'}>
        <Link borderBottom={'0.5px white solid'} pb={5} href="/">
          
          HOME
        
        </Link>
        <Link pt={2} borderBottom={'0.5px white solid'} pb={5} href="/booking">
          
          BOOK
        
        </Link>
        <Link pt={2} href="/contact">
          
          CONTACT
        
        </Link>
      </VStack>
      
      
    </Box>
  );
};


interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      
      w={'100%'}
      alignItems="center"
      bgColor="black"
      
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        size="lg"
        fontSize={30}
        bg={'transparent'}
        onClick={onOpen}
        _hover={{
          bg: 'transparent',
          color: 'white',
        }}
        color={'white'}
        aria-label="open menu"
        icon={<RiMenu2Line />}
      />
     
  
 
     
    </Flex>
  );
};