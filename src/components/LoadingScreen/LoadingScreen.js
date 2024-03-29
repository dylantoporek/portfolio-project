import { Flex, Stack, Heading, Text, Image, useMediaQuery, SkeletonCircle, SkeletonText, Box} from "@chakra-ui/react";
import { motion } from "framer-motion"
export default function LoadingScreen() {
    return (
        <motion.div>
            <Stack
            minW={'100vw'}
            minH={'100vh'}
            backgroundColor={'#1D1D20'}
            >
                <motion.div
                    style={{
                        display: 'flex',
                    }}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}>
                        <Box p={4} w={'100vw'} h={'100vh'}>
                            <Image
                                src={'./ghost.svg'} 
                                maxW={'50px'}/>
                                <Flex gap={10} mt={'30vh'} justifyContent={'center'}>
                                    <SkeletonCircle speed={.8} startColor="#90EE90" endColor="#1C61B1" size={'40px'}/>
                                    <SkeletonCircle speed={.9} startColor="#90EE90" endColor="#1C61B1" size={'40px'}/>
                                    <SkeletonCircle speed={1} startColor="#90EE90" endColor="#1C61B1" size={'40px'}/>
                                    {/* <SkeletonText mt={'30px'} noOfLines={4} spacing={5} startColor="#90EE90" endColor="#1C61B1" skeletonHeight={2} w={'50vw'}/> */}
                                </Flex>
                        </Box>
                </motion.div>  
            </Stack>
        </motion.div>
    )

    // return (
    //     <motion.div 
    //     initial={{ opacity: 0, scale: 1 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.2 }}
    //     >
    //         <Stack>
    //             <Flex 
    //             flexDir={'column'} 
    //             alignSelf={'center'}
    //             p={isMobile ? 1 : 5}
    //             fontSize={14}
    //             fontWeight={300}
    //             maxW={'100%'}>
    //                 <Flex>
    //                     <Heading fontSize={isMobile ? 40:70} fontWeight={200} mb={4} transition={'all ease-in .1s'}>
    //                         Welcome.
    //                     </Heading>
    //                 </Flex>
                    
    //                 <Flex ml={isMobile ? 0:0} w={'100%'} minW={'80vw'}>
    //                     <Flex 
    //                         background={'linear-gradient(to top,  #90EE90 0%, #67D89A 20%, #34BEA5 40%, #1EA9AC 60%, #1D80AF 80%, #1C61B1 100%)'} 
    //                         minW={'3px'}
    //                         borderRadius={'5em'}
    //                         marginRight={1}
    //                         mt={5}
    //                         mb={5}>
    //                     </Flex>
    //                     <Flex p={4} flexDir={'column'} fontSize={isMobile ? '14px' : '16px'} maxW={isMobile ? '100%' : '75%'}>
    //                         <Text mb={4}>
    //                             My name is Dylan Toporek and I am a fullstack engineer & developer based in Syracuse, New York. I taught math to middle and high school students for a several years before transitioning careers to software engineering.
    //                         </Text>
    //                         <Text mb={4}>
    //                             I am passionate about developing pixel perfect interfaces, intuitive UX, and well structured systems. 
    //                         </Text>
    //                         <Text>
    //                             Outside of work, my hobbies include playing games, cooking, hiking, and spending time with my dogs, Lily and Oaki.
    //                         </Text>
    //                     </Flex>
    //                 </Flex>
    //             </Flex>
    //         </Stack>
    //     </motion.div>
    // );
}