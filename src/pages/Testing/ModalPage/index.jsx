import { Box, Container, Stack } from "@mui/material";
import { useState } from "react";
import JdModal from "../../../components/JdModal";
import JdButton from "../../../components/JdButton";

const ModalPage = () => {
  const [openModal, setOpenModal] = useState({
    view: false,
    confirm: false,
    error: false,
  });

  return (
    <Container>
      <Box padding={10}>
        <Stack direction="row" spacing={2}>
          <JdButton
            onClick={() => setOpenModal((prev) => ({ ...prev, view: true }))}
            fontcolor="white"
          >
            View Modal
          </JdButton>
          <JdButton
            onClick={() => setOpenModal((prev) => ({ ...prev, confirm: true }))}
            fontcolor="white"
          >
            Confirm Modal
          </JdButton>
          <JdButton
            onClick={() => {
              setOpenModal((prev) => ({ ...prev, confirm: true, error: true }));
            }}
            fontcolor="white"
            bgcolor="#FC0005"
          >
            Error Confirm Modal
          </JdButton>
        </Stack>
        <JdModal
          key="modal-view"
          open={openModal.view}
          onClose={() => setOpenModal((prev) => ({ ...prev, view: false }))}
          title="View Modal Example"
          size="lg"
        >
          tes
        </JdModal>
        <JdModal
          key="modal-confirm"
          title={"Confirm Modal Example"}
          open={openModal.confirm}
          onClose={() =>
            setOpenModal((prev) => ({ ...prev, confirm: false, error: false }))
          }
          onConfirm={() => console.log("Confirm")}
          isConfirm
          size="md"
          okText="Simpan"
          cancelText="Kembali"
          error={openModal.error}
        >
          tes 2
        </JdModal>
      </Box>
    </Container>
  );
};

export default ModalPage;
