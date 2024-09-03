"use client";

import React, { useState, useEffect } from "react";
import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
