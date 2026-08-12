import { useState } from "react";
import RoundButtons from "../component/RoundButtons";

const SaveContact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumber = (value: string) => {
    setPhoneNumber((prev) => prev + value);
  };

  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleSave = () => {
    if (!name || !phoneNumber) {
      alert("Please enter name and phone number");
      return;
    }

    console.log({
      name,
      phoneNumber,
    });

    alert("Contact saved!");

    setName("");
    setPhoneNumber("");
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        margin: "30px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Save Contact</h2>

      {/* Number Display */}
      <div
        style={{
          height: "50px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          marginBottom: "20px",
        }}
      >
        {phoneNumber || "Enter number"}
      </div>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          height: "45px",
          padding: "0 12px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxSizing: "border-box",
        }}
      />

      {/* Keypad */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          justifyItems: "center",
        }}
      >
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
          (value) => (
            <RoundButtons
              key={value}
              value={value}
              onClick={() => handleNumber(value)}
            />
          ),
        )}
      </div>

      {/* Delete */}
      <button
        onClick={handleDelete}
        style={{
          width: "100%",
          height: "40px",
          marginTop: "15px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        style={{
          width: "100%",
          height: "45px",
          marginTop: "10px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#222",
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Save Contact
      </button>
    </div>
  );
};

export default SaveContact;
