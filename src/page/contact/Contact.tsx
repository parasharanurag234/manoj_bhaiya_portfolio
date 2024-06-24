import { Link } from "react-router-dom";
import "./Contact.css";
import {
  IoCall,
  IoMailSharp,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";
import ButtonComp from "../../components/button/Button";
import Transition from "../../components/transition/Transition";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqydzqp");
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (state.succeeded) {
      alert("Thank you for contacting!");
      setFormData({
        user_name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Transition>
      <div className="contact min-h-screen gap-8 lg:gap-20 md:gap-20 p-14 flex flex-col justify-around relative">
        <div className="titleBox text-center mt-3">
          <h1 className="text-4xl font-bold position-relative">Get in Touch</h1>
          <span className="line"></span>
        </div>
        <div className="bottom-row flex flex-col gap-16 lg:flex-row">
          <div className="contactBox">
            <h2 className="mb-4 text-2xl uppercase">Address</h2>
            <p className="text-xl mb-4">VPO-Tilpat, Faridabad, Haryana</p>
            <Link to="tel:9540394049">
              <p className="flex text-xl mb-3 gap-2 items-center">
                <span className="color">
                  <IoCall />
                </span>
                (+91) 9599336717
              </p>
            </Link>
            <Link to="mailto:ankitmishra07am@gmail.com">
              <p className="flex text-xl gap-2 items-center">
                <span className="color">
                  <IoMailSharp />
                </span>
                manojtiwari.dev@gmail.com
              </p>
            </Link>
            <h2 className="my-4 text-2xl uppercase">Follow me</h2>
            <div className="icons flex gap-6">
              <Link
                to={
                  "https://www.linkedin.com/in/manoj-tiwari-38256320a"
                }
                target="_blank"
              >
                <span className=" text-2xl">
                  {" "}
                  <IoLogoLinkedin />
                </span>
              </Link>
              <Link to={"https://github.com/mtmvt"} target="_blank">
                <span className=" text-2xl">
                  {" "}
                  <IoLogoGithub />
                </span>
              </Link>
             
              {/* <Link
                to={"https://x.com/ankittm2?t=3_sthYtShNnCFa8qdKwhnw&s=35"}
                target="_blank">
                <span className=" text-2xl">
                  {" "}
                  <BsTwitterX />
                </span>
              </Link> */}
            </div>
          </div>
          <form className="inputBox w-full" onSubmit={handleFormSubmit}>
            <h2 className="mb-4 text-2xl uppercase">Send us a note</h2>
            <div className="inputFields flex flex-col lg:flex-row md:flex-row gap-4">
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                placeholder="Name"
                className="text-base outline-none rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="text-base outline-none rounded-md"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="text-area my-4">
              <textarea
                id="message"
                name="message"
                onChange={handleInputChange}
                value={formData.message}
                className="w-full outline-none rounded-md"
                placeholder="Tell us more about your needs........"
              ></textarea>
            </div>
            <ButtonComp
              // type="submit"
              // disabled={state.submitting}
              text="Send Message"
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </Transition>
  );
};

export default Contact;
