import React from "react";

function FeedbackCard({ data }) {

    return (
        <div className="feedback-card">

            <h3>{data.name}</h3>
            <p>{data.email}</p>

            <span className="badge">{data.category}</span>
            <span className="badge priority">Priority: {data.priority}</span>

            <p>{data.description}</p>

            {data.screenshot && (
                <div>
                    <p>Screenshot</p>
                    <img src={data.screenshot} alt="screenshot" />
                </div>
            )}

            <h4>Steps</h4>
            <ul>
                {data.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}
            </ul>

            <h4>Suggestions</h4>
            <ul>
                {data.suggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                ))}
            </ul>

            <p><b>Submitted:</b> {data.time}</p>

        </div>
    );
}

export default FeedbackCard;