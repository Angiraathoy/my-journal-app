import React, { useState } from "react";

export default function App() {
  const [pages, setPages] = useState([
    {
      title: "Page 1",
      notes: "",
      bgColor: "#ffffff",
      image: "",
      spotify: ""
    }
  ]);

  const addPage = () => {
    setPages([
      ...pages,
      {
        title: `Page ${pages.length + 1}`,
        notes: "",
        bgColor: "#ffffff",
        image: "",
        spotify: ""
      }
    ]);
  };

  const updatePage = (index, field, value) => {
    const updatedPages = [...pages];
    updatedPages[index][field] = value;
    setPages(updatedPages);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>My Journal Notebook</h1>
      <button onClick={addPage}>Add New Page</button>

      <div style={{ marginTop: 20 }}>
        {pages.map((page, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 20,
              borderRadius: 5,
              backgroundColor: page.bgColor
            }}
          >
            <h3>{page.title}</h3>

            <label>Background Color: </label>
            <input
              type="color"
              value={page.bgColor}
              onChange={(e) =>
                updatePage(index, "bgColor", e.target.value)
              }
            />
            <br />
            <textarea
              placeholder="Write your notes here..."
              value={page.notes}
              onChange={(e) =>
                updatePage(index, "notes", e.target.value)
              }
              style={{ width: "100%", height: 80, marginTop: 10 }}
            />
            <br />
            <label>Image URL: </label>
            <input
              type="text"
              placeholder="Paste image link here"
              value={page.image}
              onChange={(e) => updatePage(index, "image", e.target.value)}
              style={{ width: "100%" }}
            />
            {page.image && (
              <img
                src={page.image}
                alt="Journal"
                style={{ width: "100%", marginTop: 10 }}
              />
            )}
            <br />
            <label>Spotify Embed Link: </label>
            <input
              type="text"
              placeholder="Paste Spotify embed link here"
              value={page.spotify}
              onChange={(e) => updatePage(index, "spotify", e.target.value)}
              style={{ width: "100%" }}
            />
            {page.spotify && (
              <iframe
                src={page.spotify}
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
                style={{ marginTop: 10 }}
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
