import { Box, Flex, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { FilterField } from 'components/Filter/Filter.styled';
import { Button } from './pages.styled/Pages.styled';

export default function LoginPage() {
  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
      text-align="center"
    >
      <Box
        backdropFilter="blur(16px)"
        p={20}
        br="12px"
        border="1px solid black"
        width={300}
        borderRadius={12}
      >
        <form>
          <VStack spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FilterField
                bg="transparent"
                id="email"
                name="email"
                type="email"
                variant="filled"
                // onChange={handleChange}
                // value={values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FilterField
                id="password"
                name="password"
                type="password"
                variant="filled"
                // onChange={handleChange}
                // value={values.password}
              />
            </FormControl>
            <Button type="submit">Login</Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
