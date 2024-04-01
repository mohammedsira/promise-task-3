async function fetchRandomImage() {
    try {
        const response = await fetch(`https://cataas.com/api/cats?tags=cute`);
        const cats = await response.json();

        // Check if the response contains data
        if (cats && cats.length > 0) {
            // Select a random cat object from the array
            const randomCat = cats[Math.floor(Math.random() * cats.length)];

            // Get the ID of the selected cat object
            const catId = randomCat._id;

            // Check if catId is valid
            if (catId) {
                // Create the URL for the image using the ID
                const imageUrl = `https://cataas.com/cat/${catId}?type=small`;

                // Set the image source to the generated URL
                const imgElement = document.querySelector(".img-fluid");
                imgElement.src = imageUrl;
            } else {
                console.error("Error: Cat ID is undefined");
            }
        } else {
            console.error("Error: No cat data found in the response");
        }
    } catch (err) {
        console.error("Error fetching API", err);
    }
}