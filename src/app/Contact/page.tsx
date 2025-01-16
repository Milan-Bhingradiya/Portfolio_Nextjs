"use client";
import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Spinner from "@/utils/Spinner";
import { addDocument } from "@/services/fireStoreOperations";
import { motion } from "framer-motion";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [Category, setCategory] = useState("Select Category");

  const initialPayload = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [Payload, setPayload] = useState(initialPayload);
  const [errors, setErrors] = useState({});
  const [apicalling, setapicalling] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setPayload((Payload) => ({ ...Payload, [target.name]: target.value }));
    setErrors((errors) => ({ ...errors, [target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!Payload.name.trim()) newErrors.name = "Name is required.";
    if (!Payload.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(Payload.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!Payload.subject.trim()) newErrors.subject = "Subject is required.";
    if (!Payload.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setapicalling(true);
    const res = await addDocument("contactus", Payload);
    setapicalling(false);

    if (res === false) {
      alert("Message Not Sent");
    } else {
      alert("Message Sent Successfully");
      setPayload(initialPayload); // Reset form after successful submission
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative py-8 bg-newprimary min-h-screen"
        >
          <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8 p-6">
            <motion.div
              {...fadeInUp}
              className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0"
            >
              <p className="text-white text-3xl font-semibold sm:text-4xl">
                Get in touch
              </p>
              <p className="text-gray-300">
                I love to hear suggestions and queries from you!
              </p>
            </motion.div>

            {apicalling ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex justify-center h-[50vh] items-center"
              >
                <Spinner />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="font-medium">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={Payload.name}
                      onChange={handleChange}
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                        errors.name ? "border-red-500" : "focus:border-gray-800"
                      } shadow-sm rounded-lg transition-all duration-300 focus:ring-2 focus:ring-gray-800/20`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={Payload.email}
                      onChange={handleChange}
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                        errors.email
                          ? "border-red-500"
                          : "focus:border-gray-800"
                      } shadow-sm rounded-lg transition-all duration-300 focus:ring-2 focus:ring-gray-800/20`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={Payload.subject}
                      onChange={handleChange}
                      className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                        errors.subject
                          ? "border-red-500"
                          : "focus:border-gray-800"
                      } shadow-sm rounded-lg transition-all duration-300 focus:ring-2 focus:ring-gray-800/20`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="font-medium">Message</label>
                    <textarea
                      name="message"
                      value={Payload.message}
                      onChange={handleChange}
                      className={`w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border ${
                        errors.message
                          ? "border-red-500"
                          : "focus:border-gray-800"
                      } shadow-sm rounded-lg transition-all duration-300 focus:ring-2 focus:ring-gray-800/20`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>
            )}
          </div>
        </motion.main>
      </motion.div>
    </>
  );
}
