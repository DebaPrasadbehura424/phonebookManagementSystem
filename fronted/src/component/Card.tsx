interface CardProps {
  name: string;
  phoneNumber: string;
}

const Card: React.FC<CardProps> = ({ name, phoneNumber }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
        marginBottom: "10px",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#222",
          }}
        >
          {name}
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#666",
            marginTop: "4px",
          }}
        >
          {phoneNumber}
        </div>
      </div>
    </div>
  );
};

export default Card;
