interface RoundButtonsProps {
  value: string;
  onClick: () => void;
}

const RoundButtons: React.FC<RoundButtonsProps> = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        border: "1px solid #ddd",
        backgroundColor: "#f5f5f5",
        fontSize: "22px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default RoundButtons;
