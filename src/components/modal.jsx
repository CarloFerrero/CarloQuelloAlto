import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const ModalComponent = ({ header, body, action, openButton }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button type="submit" onClick={onOpen}>
        {openButton}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="30px">{body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              {action}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
