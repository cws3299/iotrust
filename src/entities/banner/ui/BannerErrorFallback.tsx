type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function BannerErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-red-600">
      <p className="font-semibold">배너 로딩 중 오류가 발생했어요.</p>
      <p className="text-sm text-gray-500 mt-1">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-3 px-4 py-2 rounded-md bg-red-500 text-white text-sm"
      >
        다시 시도
      </button>
    </div>
  );
}
