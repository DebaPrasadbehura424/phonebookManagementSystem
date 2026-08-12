import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/Card";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

const ViewContact = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  if (loading) {
    return <h3>Loading contacts...</h3>;
  }

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        My Contacts
      </h2>

      {contacts.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          phoneNumber={contact.phone}
        />
      ))}
    </div>
  );
};

export default ViewContact;
