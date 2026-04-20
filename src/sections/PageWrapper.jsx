import { useState, Children, cloneElement } from "react";
import FormModal from "./FormModal";

export default function PageWrapper({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    ctaName: "",
    color: "",
  });

  // function to open modal from any section
  const openModalHandler = ({ title, ctaName, color }) => {
    setModalConfig({ title, ctaName, color });
    setOpenModal(true);
  };

  // pass openModal to all children (sections)
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { openModal: openModalHandler })
  );

  return (
    <>
      {childrenWithProps}

      <FormModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title={modalConfig.title}
        ctaName={modalConfig.ctaName}
        color={modalConfig.color}
      />
    </>
  );
}