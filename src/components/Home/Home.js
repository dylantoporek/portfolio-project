import React, {useState} from "react";
import '../Home/index.scss'
import { Flex, Stack, Text, Heading, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion"

function Home(){
    const [loading, setLoading] = useState(true)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.3}}
        
        >
            <Stack>
                <Flex 
                flexDir={'column'} 
                alignSelf={'center'}
                p={isMobile ? 1 : 5}
                fontSize={14}
                fontWeight={300}
                maxW={'100%'}>
                    <Flex>
                        <Heading fontSize={isMobile ? 40:70} fontWeight={200} mb={4} 
                        // transition={'all ease-in .1s'}
                        >
                            Welcome.
                        </Heading>
                    </Flex>
                    
                    <motion.div 
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{delay: .5}}>
                    <Flex ml={isMobile ? 0:0} w={'100%'} minW={'80vw'}>
                        <Flex 
                            background={'linear-gradient(to top,  #90EE90 0%, #67D89A 20%, #34BEA5 40%, #1EA9AC 60%, #1D80AF 80%, #1C61B1 100%)'} 
                            minW={'3px'}
                            borderRadius={'5em'}
                            marginRight={1}
                            mt={5}
                            mb={5}>
                        </Flex>
                        <Flex p={4} flexDir={'column'} fontSize={isMobile ? '14px' : '16px'} maxW={isMobile ? '100%' : '75%'}>
                            <Text mb={4}>
                                My name is Dylan Toporek and I am a fullstack engineer & developer based in Syracuse, New York. I taught math to middle and high school students for a several years before transitioning careers to software engineering.
                            </Text>
                            <Text mb={4}>
                                I am passionate about developing pixel perfect interfaces, intuitive UX, and well structured systems. 
                            </Text>
                            <Text>
                                Outside of work, my hobbies include playing games, cooking, hiking, and spending time with my dogs, Lily and Oaki.
                            </Text>
                        </Flex>
                    </Flex>
                    </motion.div>
                    
                </Flex>
            </Stack>
        </motion.div>
    );
}

export default Home