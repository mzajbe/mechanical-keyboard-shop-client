

interface ConfirmationModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
