// Reactフック
import { useState, useEffect } from "react";

// スタイル定数
import { TRANSITION_DURATION } from "../../../styles/constants";

// PWAインストールプロンプトイベントの型定義
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

// PWAインストーラーメインコンポーネント
const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Service Worker を登録
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }

    // PWA インストールプロンプトをキャッチ
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("ユーザーがPWAインストールを承認しました");
    } else {
      console.log("ユーザーがPWAインストールを拒否しました");
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
      <div className="bg-white rounded-lg shadow-lg border p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-xl">📱</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              アプリをインストール
            </h3>
            <p className="text-sm text-gray-600">ホーム画面に追加できます</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleInstallClick}
            className={`flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors ${TRANSITION_DURATION.QUICK}`}
          >
            インストール
          </button>
          <button
            onClick={handleDismiss}
            className={`flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors ${TRANSITION_DURATION.QUICK}`}
          >
            後で
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
