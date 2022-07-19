import { VStack, Heading, Icon } from "native-base";
import { useState } from 'react'

import Logo from '../assets/logo_primary.svg';
import { Button } from "../components/Button";
import { Input } from "../components/Input";


export function SignIn(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(){
        console.log(name, password);
    }
    

    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input 
                placeholder="E-mail" 
                mb={4}

                onChangeText={setName}
            />
            
            <Input 
                mb={8}
                placeholder="Senha" 
                secureTextEntry

                onChangeText={setPassword}
            />

            <Button title="Entrar" w="full" onPress={handleSignIn}/>

        </VStack>
    )
}