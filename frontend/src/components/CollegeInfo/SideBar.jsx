const Sidebar = () => {
    return (
      <>
        {/* Support Section */}
        <SupportCard
          title="Free support with college applications!"
          description="BigFuture's free resources are here to help you build your college essays, feature your achievements, and complete your FREE applications!"
          buttonText="Chat Now!"
        />
        {/* Test Scores Section */}
        <SupportCard
          title="Want to find your test scores?"
          description="See how your GPA, SAT, or ACT scores compare to enrolled students at each college."
          buttonText="View Scores"
        />
      </>
    );
  };
  
  const SupportCard = ({ title, description, buttonText }) => (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <h3 className="font-semibold mb-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 text-sm">{buttonText}</button>
    </div>
  );
  
  export default Sidebar;
  