const NoInternet = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f9fafb",
            padding: "24px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: "#333"
        }}>
            <div style={{
                fontSize: "60px",
                marginBottom: "20px",
                color: "#dc2626"
            }}>
                &#9888;
            </div>
            <h1 style={{
                fontSize: "28px",
                marginBottom: "10px"
            }}>
                No Internet Connection
            </h1>
            <p style={{
                fontSize: "16px",
                color: "#666",
                marginBottom: "25px",
                maxWidth: "300px"
            }}>
                You're currently offline. Please check your connection and try again.
            </p>
            <button
                onClick={() => window.location.reload()}
                style={{
                    padding: "10px 24px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "1px solid #007bff",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0056b3";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#007bff";
                }}
            >
                Retry
            </button>
        </div>
    );
};

export default NoInternet;
