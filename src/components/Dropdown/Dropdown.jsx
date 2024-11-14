import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick.jsx";
import "./dropdown.css";

const Dropdown = ({
  id,
  title,
  data,
  position = "bottom-left",
  hasImage,
  style,
  selectedId,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
    if (!title) {
      setSelectedItem(data[0]);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const getDropdownPosition = () => {
    switch (position) {
      case "bottom-right":
        return "dropdown-menu bottom-right";
      case "bottom-left":
        return "dropdown-menu bottom-left";
      case "top-right":
        return "dropdown-menu top-right";
      case "top-left":
        return "dropdown-menu top-left";
      default:
        return "dropdown-menu bottom-left";
    }
  };

  return (
    <div ref={dropdownRef} className="dropdown-container">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`dropdown-button ${style}`}
      >
        <span>{selectedItem?.name || title}</span>
        <svg
          className={`dropdown-icon ${isOpen ? "open" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div aria-label="Dropdown menu" className={getDropdownPosition()}>
          <ul role="menu" aria-labelledby={id} aria-orientation="vertical">
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={`dropdown-item ${
                  selectedItem?.id === item.id ? "selected" : ""
                }`}
              >
                {hasImage && (
                  <img
                    src={item.imageUrl}
                    alt="image"
                    loading="lazy"
                    className="dropdown-image"
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
