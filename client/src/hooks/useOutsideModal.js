import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const useOutsideModal = (ref) => {
  const { closeModal } = useAppContext();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideModal;
