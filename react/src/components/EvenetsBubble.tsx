import { useEffect } from "react";

const EventBubblingDemo = () => {
  const handleGrandParentClick = (e) => {
    console.log("Grandparent clicked");
  };

  const handleParentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("Parent clicked");
  };

  const handleChildClick = (e) => {
    console.log("Child clicked");
    // e.stopPropagation(); // Uncomment to stop bubbling
  };

  const styles = {
    grandparent: {
      border: "3px solid #4CAF50",
      borderRadius: "12px",
      padding: "20px",
      margin: "20px",
      backgroundColor: "#e8f5e9",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    parent: {
      border: "2px solid #2196F3",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      backgroundColor: "#e3f2fd",
      cursor: "pointer",
    },
    child: {
      border: "2px solid #FF9800",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      backgroundColor: "#fff3e0",
      cursor: "pointer",
      transition: "transform 0.2s ease, background-color 0.2s",
    },
    childHover: {
      transform: "scale(1.05)",
      backgroundColor: "#ffe0b2",
    },
  };
  useEffect(() => {
    const nativeHandler = () => console.log("Native JS Child Handler");
    document?.querySelector(".child").addEventListener("click", nativeHandler);

    return () => {
      document
        .querySelector(".child")
        .removeEventListener("click", nativeHandler);
    };
  }, []);
  return (
    <div style={styles.grandparent} onClick={handleGrandParentClick}>
      Grandparent
      <div style={styles.parent} className="child" onClick={handleParentClick}>
        Parent
        <div
          style={styles.child}
          onClick={handleChildClick}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffe0b2")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#fff3e0")
          }
        >
          Child (Click Me)
        </div>
      </div>
    </div>
  );
};

export default EventBubblingDemo;
