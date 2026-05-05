import { FiMoreVertical } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import DeleteEditIcon from "../CardIcons/DeleteEditIcon";

const CardThreeDot = ({ assignment, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (fn) => {
    fn(assignment);
    setOpen(false);
  };

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <FiMoreVertical
        style={{ cursor: "pointer" }}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <DeleteEditIcon
          assignment={assignment}
          onEdit={() => handleAction(onEdit)}
          onDelete={() => handleAction(onDelete)}
        />
      )}
    </div>
  );
};

export default CardThreeDot;