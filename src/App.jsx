

import { useState } from "react";
import "./App.css";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sanitizeTitle = (text) => text.replace(/[<>:"/\\|?*]+/g, "-");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setStart("");
    setEnd("");
    setError("");
    setSuccess("");
    setShowForm(false);
  };

  const formatICSDate = (datetime) => {
    if (!datetime) return "";
    const date = new Date(datetime);
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const validateForm = () => {
    if (!title.trim()) {
      setError("Event title is required");
      return false;
    }
    if (!start) {
      setError("Start time is required");
      return false;
    }
    if (!end) {
      setError("End time is required");
      return false;
    }
    if (new Date(start) >= new Date(end)) {
      setError("End time must be after start time");
      return false;
    }
    setError("");
    return true;
  };

  const generateICS = () => {
    const dtStart = formatICSDate(start);
    const dtEnd = formatICSDate(end);
    const dtStamp = formatICSDate(new Date());

    return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@event
DTSTAMP:${dtStamp}
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT30M
DESCRIPTION:Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`.replace(/\n/g, "\r\n");
  };

  const shareICS = async () => {
    if (!validateForm()) return;

    const icsContent = generateICS();
    const file = new File([icsContent], `${title}.ics`, {
      type: "text/calendar",
    });

    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          title: title || "Calendar Event",
          text: description || "Tap to add this event to your calendar.",
          files: [file],
        });
        setError("");
        setSuccess("Event shared successfully!");
        setTimeout(() => resetForm(), 3000);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Error sharing the event. Please download the file.");
          console.error(err);
        }
      }
    } else {
      addToCalendar();
      setTimeout(() => resetForm(), 3000);
    }
  };

  const addToCalendar = () => {
    if (!validateForm()) return;

    const icsContent = generateICS();
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "event"}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setSuccess("Event downloaded successfully!");
    setTimeout(() => resetForm(), 3000);
  };

  const handleDateTimeChange = (setter) => (e) => {
    setter(e.target.value);
    if (success) setSuccess("");
  };

  if (!showForm) {
    return (
      <div className="app-landing">
        <header className="app-header">
        <img src="./calendar.svg" width="100px" hieght="auto"></img>
          <div className="start-section column-layout">
            <button
              className="button-85 start-button"
              onClick={() => setShowForm(true)}
            >
              Create Event
            </button>
            <span className="subtitle below-text">
              <span
                className="material-symbols-sharp"
                style={{ verticalAlign: "middle", marginRight: "0.4rem" }}
              >
                calendar_add_on
              </span>
              Calendar events in seconds
            </span>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
               <img src="./calendar.svg" width="100px" hieght="auto"></img>
        <p className="subtitle">
          <i>* Required Field</i>
        </p>
        
        <button
          className="button-85"
          onClick={resetForm}
          style={{ marginBottom: "1rem" }}
        >
          Back
        </button>
      </header>

      <main className="form-container">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (success) setSuccess("");
            }}
            placeholder="Team Meeting"
            required
            aria-label="Event Title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (success) setSuccess("");
            }}
            placeholder="Description of the event"
            rows={3}
            aria-label="Event Description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              if (success) setSuccess("");
            }}
            placeholder="virtual meeting"
            aria-label="Event Location"
          />
        </div>

        <div className="datetime-group">
          <div className="form-group">
            <label htmlFor="start">Start Time *</label>
            <input
              id="start"
              type="datetime-local"
              value={start}
              onChange={handleDateTimeChange(setStart)}
              required
              aria-label="Start Time"
            />
          </div>

          <div className="form-group">
            <label htmlFor="end">End Time *</label>
            <input
              id="end"
              type="datetime-local"
              value={end}
              onChange={handleDateTimeChange(setEnd)}
              required
              aria-label="End Time"
            />
          </div>
        </div>

        <div className="button-group">
          <button className="button-85 share-button" onClick={shareICS}>
            Share Event
          </button>
          <button className="button-85 download-button" onClick={addToCalendar}>
            Add to Calendar
          </button>
        </div>

        {error && <div className="message error">{error}</div>}
        {success && <div className="message success">{success}</div>}
      </main>
    </div>
  );
}
