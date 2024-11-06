/*

src/pages/Home/Home.js

*/

// initial homepage

import React, { useEffect, useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';
import JobDetails from '../../pages/JobDetails/JobDetails'; // imports job detail cards
import jobData from '../../data/jobData.json'; // imports job data

const Home = () => {
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Simulates data fetching to test page loading for 2seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  return (
    <div className="container-fluid p-10 flex flex-wrap flex-column justify-center">
      <div className="container p-5 flex flex-wrap job-list_">
        {jobData.map((job, index) => (
          <JobDetails key={index} {...job} />
        ))}
      </div>
      {/* populates job detail cards */}
    </div>
  );
};

export default Home;
