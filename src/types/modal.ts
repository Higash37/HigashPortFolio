// モーダル関連型定義
import type { ReactNode } from "react";

export interface ModalContent {
  title: string;
  description: ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export interface ModalState {
  isOpen: boolean;
  content: ModalContent | null;
}
