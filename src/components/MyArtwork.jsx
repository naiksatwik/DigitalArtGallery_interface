import React, { useEffect, useState } from "react";
import AdminNav from './AdminNav';
import ArtworkCard from './ArtworkCard';

export const MyArtwork = () => {
    const [artworks, setArtworks] = useState([]); // State to store artworks
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null); // State to handle errors
    const userType = localStorage.getItem("userType");

    useEffect(() => {
        // Fetch artworks from the API
        const fetchArtworks = async () => {
            try {
                const response = await fetch("http://localhost:3000/artworks");
                if (!response.ok) {
                    throw new Error("Failed to fetch artworks");
                }
                const data = await response.json();
                setArtworks(data);
            } catch (err) {
                console.error("Error fetching artworks:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    const handleRemove = async (artworkId) => {
        try {
            const response = await fetch(`http://localhost:3000/artworks/${artworkId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete artwork");
            }
            // Filter out the deleted artwork
            setArtworks((prevArtworks) =>
                prevArtworks.filter((artwork) => artwork.artwork_id !== artworkId)
            );
        } catch (err) {
            console.error("Error deleting artwork:", err);
            setError(err.message);
        }
    };

    return (
        <>
            <AdminNav />
            <div className="px-4 py-10 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center">
                {loading && <p>Loading artworks...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading &&
                    artworks.map((artwork) => (
                        <ArtworkCard
                            key={artwork.artwork_id}
                            image={`data:image/jpeg;base64,${artwork.artwork_image}`} // Assuming Base64 Image format
                            title={artwork.artwork_name}
                            price={artwork.price}
                            size="200x200" // Assuming you want to add a fixed size here or use the artwork's real size
                            onRemove={() => handleRemove(artwork.artwork_id)} // Pass remove handler
                        />
                    ))}
            </div>
        </>
    );
};
