// Controller function for Index route
const index = async (req, res) => {

    // Send Reponse to http GET requests
    res.send(
        {
            title: "Welcome to the Photo API",
            photos: "/photos",
            photo: "/photos/:id"
        }
    );
};

// Export controller function
module.exports = index;