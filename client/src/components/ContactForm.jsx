// ContactForm.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkzjyyq");

  if (state.succeeded) {
    return (
      <div className="alert alert-success mt-4 text-center">
        ✅ Thanks for contacting me! I’ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">
          Your Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label fw-bold">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows="5"
          placeholder="Write your message here..."
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary w-100"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
