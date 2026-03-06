import React from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {

  return (
    <div>

      <h2>Feedback Dashboard</h2>

      {feedbacks.map((item, index) => (
        <FeedbackCard key={index} data={item} />
      ))}

    </div>
  );
}

export default FeedbackList;