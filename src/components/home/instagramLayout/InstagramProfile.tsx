

const InstagramProfile = () => {
    const profile = {
        logo: 'https://via.placeholder.com/150', // Replace with your profile image URL
        username: 'mechanicalkeyboards',
        followers: '10k',
        following: '500',
      };
    return (
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-gray-100 rounded-lg shadow-lg">
        <div className="flex items-center space-x-6">
          <img
            src={profile.logo}
            alt="Instagram Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="text-xl font-semibold">{profile.username}</h3>
            <div className="flex space-x-4 mt-2">
              <div className="text-gray-600">
                <span className="font-bold">{profile.followers}</span> Followers
              </div>
              <div className="text-gray-600">
                <span className="font-bold">{profile.following}</span> Following
              </div>
            </div>
          </div>
        </div>
        <button className="bg-customAccent2 hover:bg-customAccent1 text-white font-bold py-2 px-4 rounded">
          Follow us on Instagram
        </button>
      </div>
    );
};

export default InstagramProfile;