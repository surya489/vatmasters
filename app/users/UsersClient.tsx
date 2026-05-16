"use client";

import { useCallback, useEffect, useState } from "react";

type Row = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 350);
    return () => clearTimeout(t);
  }, [search]);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
      });
      if (debounced) params.set("search", debounced);
      if (dateFrom) params.set("dateFrom", dateFrom);
      if (dateTo) params.set("dateTo", dateTo);
      const res = await fetch(`/api/contact-submissions?${params.toString()}`, { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message ?? "Could not load users.");
      }
      setRows(data.data);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [page, debounced, dateFrom, dateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    setPage(1);
  }, [debounced, dateFrom, dateTo]);

  return (
    <div>
      <h1 className="mb-3" style={{ color: "#0f172a", fontWeight: 700 }}>
        Submitted contacts
      </h1>
      <p style={{ color: "rgba(15,23,42,.72)" }} className="mb-4">
        Newest first — {total} total record{total === 1 ? "" : "s"}.
      </p>
      <div
        className="p-3 mb-4 d-flex flex-wrap gap-3 align-items-end"
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid rgba(36,62,66,.18)",
        }}
      >
        <div style={{ minWidth: 220, flex: "1 1 200px" }}>
          <label className="form-label mb-1" style={{ fontWeight: 600, color: "#223b41" }}>
            Search
          </label>
          <input
            className="form-control"
            placeholder="Name, email, phone, message…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div style={{ minWidth: 160 }}>
          <label className="form-label mb-1" style={{ fontWeight: 600, color: "#223b41" }}>
            From
          </label>
          <input className="form-control" type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <div style={{ minWidth: 160 }}>
          <label className="form-label mb-1" style={{ fontWeight: 600, color: "#223b41" }}>
            To
          </label>
          <input className="form-control" type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            setSearch("");
            setDateFrom("");
            setDateTo("");
            setPage(1);
          }}
        >
          Reset filters
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="alert alert-secondary py-2">Loading…</div>}

      <div className="table-responsive" style={{ background: "#fff", borderRadius: 16 }}>
        <table className="table table-striped mb-0">
          <thead style={{ background: "#223b41", color: "#fff" }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={r.id}>
                <td>{(page - 1) * 10 + idx + 1}</td>
                <td>
                  {r.firstName} {r.lastName}
                </td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td style={{ maxWidth: 360, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {r.message}
                </td>
                <td>{new Date(r.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            {!loading && rows.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-5 text-muted">
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          type="button"
          className="btn btn-outline-dark"
          disabled={page <= 1 || loading}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </button>
        <span style={{ fontWeight: 600 }}>
          Page {page} / {totalPages}
        </span>
        <button
          type="button"
          className="btn btn-outline-dark"
          disabled={page >= totalPages || loading}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
