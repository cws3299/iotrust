type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function ServiceErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="px-4 py-6 text-center">
      <p className="font-semibold text-red-600">
        서비스 목록을 불러오는 중 오류가 발생했어요.
      </p>
      <p className="text-sm text-muted-foreground mt-1">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-3 px-4 py-2 rounded-md bg-black text-white text-sm"
      >
        다시 시도
      </button>
    </div>
  );
}
