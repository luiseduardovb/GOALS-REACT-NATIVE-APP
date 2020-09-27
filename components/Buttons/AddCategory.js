import React, { useState } from "react";

//Components
import CategoryModal from "../modals/CategoryModal";

//Styles
import { Icon, Text } from "native-base";
import { AddCategorylButtonStyled } from "./styles";

const AddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <AddCategorylButtonStyled
        type="MaterialIcons"
        name="add-box"
        onPress={() => setIsOpen(true)}
      />
      <CategoryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddCategory;
