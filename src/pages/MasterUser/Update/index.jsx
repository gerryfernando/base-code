import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import JdAlert from "../../../components/JdAlert";
import LayoutFormMaster from "../../../components/LayoutFormMaster";
import FormMasterUser from "../Form";

const FormUpdateMU = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const RHF = useForm();
  const { getValues, reset } = RHF;
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

  const getDataDetail = async (valId) => {
    try {
      setLoading(true);
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + "/master-user-detail/" + valId
      );
      console.log(res);
    } catch (error) {
      enqueueSnackbar("error", {
        variant: "error",
      });
    } finally {
      setLoading(false);
      reset({ email: "tes@mail.com", fullName: "john doe" });
    }
  };
  const onSubmit = async (data) => {
    try {
      console.log(data);
      setLoading(true);
      const res = await axios.put(
        import.meta.env.VITE_BASE_URL + "/user/" + data.id,
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

  const showModalSubmit = async () => {
    setModalContent({
      title: "Ubah Data",
      message: "Apakah Anda yakin mengubah data tersebut?",
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
    if (id) {
      console.log("This is update page", id);
      getDataDetail(id);
    } else {
      navigate("/master-user");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LayoutFormMaster
        onSubmitForm={showModalSubmit}
        RHF={RHF}
        idForm={"FormUpdateMU"}
        onCancel={onCancel}
        loading={loading}
        title="Ubah User"
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
        message={modalContent.message}
        open={showModal}
        okText="Yakin"
        loading={loading}
        onClose={() => {
          setShowModal(false);
          setModalContent({
            title: "",
            message: "",
          });
        }}
        onConfirm={() => {
          modalContent.title === "Cancel"
            ? navigate("/master-user")
            : onSubmit(getValues());
        }}
      />
    </>
  );
};

export default FormUpdateMU;
