"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const contactUsHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorInfo({});
    setSuccessMessage('');

    const inputData = new FormData();
    inputData.append('name', enteredName);
    inputData.append('email', enteredEmail);
    inputData.append('subject', enteredSubject);
    inputData.append('message', enteredMessage);
    console.log(inputData)
    try {
      console.log(inputData);

      // Menggunakan axios.post dengan FormData sebagai data yang dikirimkan
      const response = await axios.post('/mail', inputData).then((q)=>{console.log(q)})
      setSuccessMessage('Your email has been sent');
      setEnteredName('');
      setEnteredEmail('');
      setEnteredSubject('');
      setEnteredMessage('');
    } catch (error) {
      // Handle the error here (Optional)
      setErrorInfo(error.response.data); // Assuming the server returns error information
    } finally {
      setIsLoading(false);
    }
  };

  const setEnteredNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const setEnteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const setEnteredSubjectHandler = (e) => {
    setEnteredSubject(e.target.value);
  };

  const setEnteredMessageHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  return (
    <>
      <div className="nav-bg flex relative top-0 left-0 lg:h-[100px] h-16 w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
      <Nav id="contact" />
      <main className="h-screen w-full bg-black text-white">
        <h1 className="text-4xl text-center mx-auto font-josefin mb-20 pt-10">HIT US UP, WE'LL REPLY SOON</h1>
        <div className="h-full flex justify-center">
          <form onSubmit={contactUsHandler} className="space-y-4 w-1/2">
            <div className="border-2 rounded-lg border-white p-5">
              {successMessage && (
                <div className="w-50 rounded-md">
                  <div className="text-white px-6 py-4 border-0 relative mb-4 mt-5 bg-blue-500 rounded-md">
                    <span className="text-xl inline-block mr-5 align-middle">
                      <i className="fas fa-bell"></i>
                    </span>
                    <span className="inline-block align-middle mr-8">
                      <b className="capitalize">{successMessage}</b>
                    </span>
                  </div>
                </div>
              )}
              <div className="flex">
                <div className="m-2">
                  <label htmlFor="name" className="block mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={enteredName}
                    onChange={setEnteredNameHandler}
                    required
                    className="w-full text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="m-2">
                  <label htmlFor="email" className="block mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={enteredEmail}
                    onChange={setEnteredEmailHandler}
                    required
                    className="w-full text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={enteredSubject}
                  onChange={setEnteredSubjectHandler}
                  required
                  className="w-full text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={enteredMessage}
                  onChange={setEnteredMessageHandler}
                  required
                  className="w-full text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="4"
                />
              </div>
              <div className=""></div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                {isLoading && (
                  <i className="fas fa-hourglass fa-spin text-white mr-2"></i>
                )}
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
