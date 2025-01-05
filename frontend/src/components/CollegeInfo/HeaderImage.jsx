const HeaderImage = () => {
    return (
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/ayaneshu-bhardwaj-Acx3N9h-QXs-_1200x768.jpeg"
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white rounded-lg p-2">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg" alt="College Logo" className="w-12 h-12" />
        </div>
      </div>
    );
  };
  
  export default HeaderImage;
  