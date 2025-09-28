// 共通型定義
export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface APIResponse<T> {
  data: T;
  status: "success" | "error";
  message?: string;
}
