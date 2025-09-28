import { useState, useCallback } from "react";
import type { ModalContent, ModalState } from "../types/modal";

/**
 * モーダル状態管理フック
 */
export const useModal = (
  initialState: ModalState = { isOpen: false, content: null }
) => {
  const [modalState, setModalState] = useState<ModalState>(initialState);

  const openModal = useCallback((content: ModalContent) => {
    setModalState({ isOpen: true, content });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({ isOpen: false, content: null });
  }, []);

  const toggleModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  }, []);

  return {
    isOpen: modalState.isOpen,
    content: modalState.content,
    openModal,
    closeModal,
    toggleModal,
  };
};
