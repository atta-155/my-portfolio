import "./footer.css";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";
import facebook from "../../img/facebook.png";
import linkedIn from "../../img/linkedIn.png";
import github from "../../img/github.png";
interface FormData {
  name: string;
  email: string;
  message: string;
}

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = (): boolean => {
    let errors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);

      if (formRef.current) {
        emailjs
          .sendForm(
            "service_te9hidc",
            "template_txh88zw",
            formRef.current,
            "HUxhrJW4ta0qbRMxI"
          )
          .then((result) => {
            setIsLoading(false);
            console.log("Email sent successfully:", result.text);
            // Optionally, you can reset the form after successful submission
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            setShowToast(true);
          })
          .catch((error: Error) => {
            setIsLoading(false);
            console.error("Email could not be sent:", error);
          });
      }
    }
  };

  return (
    <div className="footer row px-5 pt-5 pb-3">
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
        <div className="subtitle-1 mb-4 text-center">Get in touch with me</div>

        <form onSubmit={handleSubmit} ref={formRef} className="mb-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <small className="error-message">{formErrors.name}</small>
            )}
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error-message">{formErrors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <span className="error-message">{formErrors.message}</span>
            )}
          </div>

          <div className="text-center">
            {isLoading ? (
              <button
                type="submit"
                className="btn btn-outline-primary"
                disabled
              >
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="pl-4">Sending...</span>
              </button>
            ) : (
              <button type="submit" className="btn btn-outline-primary">
                Send Message
              </button>
            )}
          </div>
        </form>

        <div className="d-flex justify-content-center mb-2">
          <div className="px-2">
            <a
              href="https://www.linkedin.com/in/aye-theint-theint-aung-12b790222/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedIn}
                className="img-fluid social-icon-footer"
              ></img>
            </a>
          </div>
          <div className="px-2">
            <a
              href="https://www.facebook.com/xing.ai.756"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={facebook}
                className="img-fluid social-icon-footer"
              ></img>
            </a>
          </div>
          <div className="px-2">
            <a
              href="https://github.com/atta-155"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="img-fluid social-icon-footer"></img>
            </a>
          </div>
        </div>

        <div className="small-text text-center">
          Copyright &copy; 2023 | All Rights Reserved.
        </div>

        {/* {showToast ? ( */}
        <div
          className={`toast ${showToast ? "show" : ""}`}
          data-autohide="true"
          style={{ position: "fixed", top: "20px", right: "20px" }}
        >
          <div
            className="align-items-center text-bg-success border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">Message sent successfully.</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
        {/* ) : null} */}
      </div>
    </div>
  );
}

export default Footer;
