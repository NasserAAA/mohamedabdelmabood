import React from 'react';

function ProjectsPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Multilingual AI Conversational Chatbot</h2>
          <p>Developed a chatbot using Apache Groovy that supports over 6 languages and serves over 60,000 Vodafone employees per month.</p>
        </li>
        <li>
          <h2>Real-time Data Pipeline for Sentiment Analysis</h2>
          <p>Implemented a real-time data pipeline using Kafka and Spring to ingest and process large volumes of Twitter data for sentiment analysis using Stanford University NLP Library.</p>
        </li>
        <li>
          <h2>Prediction of Intended Motion from Brain EEG Signals</h2>
          <p>Developed a machine learning model to predict intended motion from brain EEG signals and created animations for classified intended motion using Unity as part of my Bachelor's project.</p>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsPage;
