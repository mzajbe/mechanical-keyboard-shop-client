

type PaginationProps= {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          onPageChange(currentPage + 1);
        }
      };
    return (
        <div className="flex justify-center space-x-4 mt-4">
        <button
          className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
};

export default Pagination;