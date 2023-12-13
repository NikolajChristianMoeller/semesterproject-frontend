export default function Paginator({ count, setPage, page, loadProducts }) {
  const pageSize = 20;
  const pages = Math.ceil(count / pageSize);

  const buttons = [];

  for (let p = 0; p < pages; p++) {
    const isActive = p * pageSize === page.limit;
    buttons.push(
      <button
        onClick={async () => {
          page.limit = p * pageSize;
          setPage(page);
          loadProducts();
        }}
        key={`page${p}`}
        className={`btn ${isActive ? "active-btn" : "btn-secondary"} `}
        id={`pages${p + 1}`}
      >{`${p + 1}`}</button>
    );
  }
  return (
    <div className="row mt-5">
      <div
        className="btn-group mx-auto w-50 "
        role="group"
        aria-label="First group"
      >
        {buttons}
      </div>
    </div>
  );
}
