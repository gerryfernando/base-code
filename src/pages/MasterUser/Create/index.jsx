import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import JdAlert from "../../../components/JdAlert";
import LayoutFormMaster from "../../../components/LayoutFormMaster";
import FormMasterUser from "../Form";

const FormCreateMU = () => {
  const navigate = useNavigate();
  const RHF = useForm();
  const { getValues } = RHF;
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
  });

  const optionsRole = [
    { value: "surveyor", label: "Surveyor" },
    { value: "tertanggung", label: "Tertanggung" },
  ];

  const optionsBengkel = [
    { value: "bengkel1", label: "Bengkel 1" },
    { value: "bengkel2", label: "Bengkel 2" },
    { value: "bengkel3", label: "Bengkel 3" },
  ];

  const onSubmit = async (data) => {
    try {
      console.log(data);
      setLoading(true);
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + "/user",
        data
      );
      console.log(res);
      navigate("/master-user");
    } catch (error) {
      enqueueSnackbar("error", {
        variant: "error",
      });
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const showModalSubmit = (data) => {
    console.log(data);
    setModalContent({
      title: "Simpan Data",
      message: "Apakah Anda yakin menyimpan data tersebut?",
    });
    setShowModal(true);
  };

  const onCancel = () => {
    setModalContent({
      title: "Cancel",
      message: "Apakah Anda yakin membatalkan aksi  tersebut?",
    });
    setShowModal(true);
  };

  useEffect(() => {
    console.log("This is create page");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LayoutFormMaster
        onSubmitForm={showModalSubmit}
        RHF={RHF}
        idForm={"FormCreateMU"}
        onCancel={onCancel}
        loading={loading}
        title="Tambah User"
      >
        <FormMasterUser
          RHF={RHF}
          optionsBengkel={optionsBengkel}
          optionsRole={optionsRole}
        />
      </LayoutFormMaster>
      <JdAlert
        title={modalContent.title}
        type="info"
        width="359px"
        loading={loading}
        message={modalContent.message}
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setModalContent({
            title: "",
            message: "",
          });
        }}
        okText="Yakin"
        onConfirm={() =>
          modalContent.title === "Cancel"
            ? navigate("/master-user")
            : onSubmit(getValues())
        }
      />
    </>
  );
};

export default FormCreateMU;
