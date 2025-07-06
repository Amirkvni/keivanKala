export default function Loading() {
  return (
    <div className="flex items-center justify-center h-96 w-3/4">
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}
