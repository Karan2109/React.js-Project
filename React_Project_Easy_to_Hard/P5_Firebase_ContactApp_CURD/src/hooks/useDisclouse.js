import React, { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return { onclose, onOpen, isOpen };
};

export default useDisclouse;
