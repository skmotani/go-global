import { useState, useRef, useEffect } from 'react'

function MultiSelect({ 
  options, 
  selected = [], 
  onChange, 
  placeholder = "Select...",
  searchPlaceholder = "Search..."
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(search.toLowerCase())
  )

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter(s => s !== option))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <div className="ms" ref={containerRef}>
      <div className="ms-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selected.length === 0 ? (
          <span className="ms-placeholder">{placeholder}</span>
        ) : (
          <span className="ms-count">{selected.length} selected</span>
        )}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      
      {isOpen && (
        <div className="ms-dropdown">
          <input
            type="text"
            className="ms-search"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="ms-list">
            {filteredOptions.length === 0 ? (
              <div className="ms-empty">No results</div>
            ) : (
              filteredOptions.map(option => (
                <label key={option} className="ms-item">
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => toggleOption(option)}
                  />
                  <span>{option}</span>
                </label>
              ))
            )}
          </div>
        </div>
      )}
      
      {selected.length > 0 && (
        <div className="ms-tags">
          {selected.slice(0, 3).map(s => (
            <span key={s} className="ms-tag">
              {s.length > 20 ? s.slice(0, 20) + '...' : s}
              <button type="button" onClick={() => toggleOption(s)}>×</button>
            </span>
          ))}
          {selected.length > 3 && (
            <span className="ms-more">+{selected.length - 3} more</span>
          )}
        </div>
      )}

      <style>{`
        .ms { position: relative; width: 100%; }
        .ms-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 10px;
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-md);
          background: var(--white);
          cursor: pointer;
          font-size: 13px;
        }
        .ms-trigger:hover { border-color: var(--gray-400); }
        .ms-placeholder { color: var(--gray-400); }
        .ms-count { color: var(--gray-700); font-weight: 500; }
        .ms-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          z-index: 50;
          margin-top: 2px;
        }
        .ms-search {
          width: 100%;
          padding: 6px 8px;
          border: none;
          border-bottom: 1px solid var(--gray-100);
          font-size: 12px;
        }
        .ms-search:focus { outline: none; background: var(--gray-50); }
        .ms-list {
          max-height: 180px;
          overflow-y: auto;
        }
        .ms-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          cursor: pointer;
          font-size: 11px;
          line-height: 1.3;
        }
        .ms-item:hover { background: var(--gray-50); }
        .ms-item input {
          width: 14px;
          height: 14px;
          accent-color: var(--primary);
          flex-shrink: 0;
        }
        .ms-empty {
          padding: 8px;
          color: var(--gray-500);
          font-size: 11px;
          text-align: center;
        }
        .ms-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 4px;
        }
        .ms-tag {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          padding: 2px 6px;
          background: var(--primary-subtle);
          color: var(--primary);
          border-radius: var(--radius-full);
          font-size: 10px;
          font-weight: 500;
        }
        .ms-tag button {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          font-size: 12px;
          line-height: 1;
          padding: 0;
        }
        .ms-more {
          font-size: 10px;
          color: var(--gray-500);
          padding: 2px 4px;
        }
      `}</style>
    </div>
  )
}

export default MultiSelect
