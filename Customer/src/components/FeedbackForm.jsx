import React, { useState, useRef } from "react";
import DynamicList from "./DynamicList";

function FeedbackForm({ addFeedback }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");

    const [steps, setSteps] = useState([""]);
    const [suggestions, setSuggestions] = useState([""]);

    const [errors, setErrors] = useState({});

    const screenshotRef = useRef();
    const notesRef = useRef();

    const validate = () => {

        let newErrors = {};

        if (!name) newErrors.name = "Name required";
        if (!email.includes("@")) newErrors.email = "Valid email required";
        if (!category) newErrors.category = "Select category";
        if (!priority) newErrors.priority = "Select priority";
        if (description.length < 10)
            newErrors.description = "Description must be 10+ characters";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const newFeedback = {
            name,
            email,
            category,
            priority,
            description,
            steps,
            suggestions,
            screenshot: screenshotRef.current.value,
            notes: notesRef.current.value,
            time: new Date().toLocaleString(),
        };

        addFeedback(newFeedback);

        setName("");
        setEmail("");
        setCategory("");
        setPriority("");
        setDescription("");
        setSteps([""]);
        setSuggestions([""]);
    };

    return (
        <form onSubmit={handleSubmit} className="card">

            <h2>Submit Feedback</h2>

            <div className="form-grid">

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="">Category</option>
                    <option>Bug</option>
                    <option>Suggestion</option>
                    <option>Complaint</option>
                    <option>Other</option>

                </select>

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >

                    <option value="">Priority</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>

                </select>

                <textarea
                    className="full"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <div className="full">
                    <DynamicList
                        title="Steps to Reproduce"
                        list={steps}
                        setList={setSteps}
                    />
                </div>

                <div className="full">
                    <DynamicList
                        title="Suggested Improvements"
                        list={suggestions}
                        setList={setSuggestions}
                    />
                </div>

                <input
                    type="text"
                    placeholder="Screenshot URL"
                    ref={screenshotRef}
                />

                <textarea
                    placeholder="Additional Notes"
                    ref={notesRef}
                ></textarea>

            </div>

            <button type="submit">Submit Feedback</button>

        </form>
    );
}

export default FeedbackForm;