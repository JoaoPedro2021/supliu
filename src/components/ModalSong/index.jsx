import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,  
} from "@chakra-ui/react"

import { useDisclosure } from "@chakra-ui/react";
import { Box, Form, Header } from "./styles";


import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api"

import { toast } from "react-toastify";

const ModalSong = ({loadAlbum, idAlbum}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const schema = yup.object().shape({
        number: yup.string().required("Campo Obrigatório!"),
        title: yup.string().required("Campo Obrigatório!"),
        duration: yup.string().required("Campo Obrigatório!"),
        
    })

    const { 
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        loadAlbum();
    }, [])

    const handleOnSubmit = async (data) => {

        await api.post('track', 
        {
            album_id: idAlbum,
            number: data.number,
            title: data.title,
            duration: data.duration
        }        
        , 
        {
            headers: {
                Authorization: "jpss7693@gmail.com"
            }
        })
        .then(response => loadAlbum())
        .catch((_) => toast.error("Erro ao registrar uma música!"))
    }



    return (
        <Box>
            <Button 
                className="btn-open"
                onClick={onOpen} 
            >   
                Adicionar Música
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose} 
                size='xl'
            >

                <ModalOverlay />
                <ModalContent 
                    className="modal-content"
                    width="400px" 
                    backgroundColor="white"
                    height="250px"
                    borderRadius="0.5rem"
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-start"
                    margin="10rem auto"
                >
                    <Header >
                        <p>Nova Música</p>
                        <ModalCloseButton className="btn-close" />
                    </Header>
                    <ModalBody pb={6} 
                        width="90%"
                    >
                        <Form onSubmit={handleSubmit(handleOnSubmit)}>
                            <FormControl display='flex' flexDirection="column">
                                <FormLabel className="label">Número da Faixa</FormLabel>
                                <Input className="input" ref={initialRef} placeholder="Número da Faixa" {...register("number")}/> 
                                <span className="span">{errors.number?.message}</span>
                            </FormControl>

                            <FormControl mt={4} display='flex' flexDirection="column">
                                <FormLabel className="label">Nome da Música</FormLabel>
                                <Input  className="input" placeholder="Nome da Música" {...register("title")}/>
                                <span className="span">{errors.title?.message}</span>
                            </FormControl>

                            <FormControl mt={4} display='flex' flexDirection="column">
                                <FormLabel className="label">Duração da Música</FormLabel>
                                <Input  className="input" placeholder="Duração da Música" {...register("duration")}/>
                                <span className="span">{errors.duration?.message}</span>
                            </FormControl>

                            <ModalFooter
                                display="flex"
                                justifyContent="flex-end"
                                width="100%"
                                paddingRight="1rem"
                            >
                                <Button 
                                    mr={3}
                                    width= "55px"
                                    border="0"
                                    backgroundColor="#1686f6"
                                    color="white"
                                    borderRadius="3px"
                                    height="20px"
                                    cursor="pointer"
                                    _hover={{backgroundColor: "#126ac2"}}
                                    type="submit"
                                    marginTop='30px'
                                >
                                    Save
                                </Button>
                                <Button 
                                    onClick={onClose}
                                    width= "55px"
                                    border="0"
                                    backgroundColor="#e6e6e6"
                                    color="black"
                                    borderRadius="3px"
                                    height="20px"
                                    cursor="pointer"
                                    _hover={{backgroundColor: "#bababa"}}
                                    marginTop='30px'
                                >
                                        Cancel
                                </Button>
                            </ModalFooter>
                        </Form>

                    </ModalBody>

                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ModalSong;