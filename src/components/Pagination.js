// Pagination.js

const Pagination = ({ totalPages, paginate }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    {[...Array(totalPages).keys()].map(number => (
      <button key={number} onClick={() => paginate(number + 1)} style={{ margin: '0 5px' }}>
        {number + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
