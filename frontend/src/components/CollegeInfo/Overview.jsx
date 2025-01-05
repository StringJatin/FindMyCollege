import { Info, MapPin } from 'lucide-react';

const Overview = () => {
  return (
    <>
      {/* Quick Facts */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Fact icon={Info} label="Type" value="Public" />
        <Fact icon={MapPin} label="Location" value="Fresno, CA" />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        California State University: Fresno is a very large, 4-year, public university. This west
        college is located in a large city in an urban setting and is primarily a commuter campus.
        It offers bachelor's, certificate, master's, and doctoral degrees. This college has an
        acceptance rate of 96% and a graduation rate of 55%.
      </p>

      {/* Application Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Interested in applying?</h3>
        <p className="mb-2">
          <span className="font-medium">College Board Code:</span> 4312
        </p>
        <p className="mb-4">
          <span className="font-medium">Application Types Accepted:</span>
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Online through college's own website</li>
        </ul>
      </div>

      {/* Important Dates */}
      <ImportantDates />
    </>
  );
};

const Fact = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="bg-blue-50 p-2 rounded-lg">
      <Icon className="h-5 w-5 text-blue-600" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const ImportantDates = () => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
    <div className="grid grid-cols-2 gap-4">
      <DateCard date="November 31" label="Regular Application Due" />
      <DateCard date="April 1" label="Financial Aid Application Due" />
    </div>
  </div>
);

const DateCard = ({ date, label }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <p className="text-gray-600">{date}</p>
    <p className="font-medium">{label}</p>
    <button className="text-blue-600 text-sm mt-2">Add to Calendar</button>
  </div>
);

export default Overview;
