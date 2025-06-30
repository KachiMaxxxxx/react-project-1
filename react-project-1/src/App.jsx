import { useState } from "react";

export default function App() {
  const sentMessages = [
    "New messages from chi",
    "Obukpa Group 3 batch: Blaqpixel says who will run our data analysis for our upcoming test",
  ];
  const [unreadMessages, setUnreadMessages] = useState(sentMessages);

  function toggleReadStatus() {
    if (unreadMessages.length > 0) {
      setUnreadMessages([]);
    } else {
      setUnreadMessages([...sentMessages]);
    }
  }

  return (
    <main>
      <div>
        {unreadMessages.length > 0 && (
          <>
            <h1>You have {unreadMessages.length} unread messages! </h1>
            <ul>
              {unreadMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </>
        )}
        {unreadMessages.length === 0 && (
          <>
            <p>You have no unread messages! </p>
          </>
        )}
      </div>
      <button onClick={toggleReadStatus}>
        {unreadMessages.length > 0 ? "Mark as Read" : "Mark as Unread"}
      </button>
    </main>
  );
}
