const FiltersTodo = ({ filter, setFilter }) => {
  return (
    <section className="section-border section-bg-white px-4 py-4 sm:px-8 lg:px-10">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'btn-primary' : 'btn-filter'}
          type="button"
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'btn-primary' : 'btn-filter'}
          type="button"
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'btn-primary' : 'btn-filter'}
          type="button"
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default FiltersTodo;
