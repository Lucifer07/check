"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Nav from '@/components/Nav';


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
      <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center mx-auto font-josefin mb-10 pt-5 sm:pt-10 lg:pt-20">HIT US UP, WE&apos;LL REPLY SOON</h1>
        <div className="h-full xl:m-16 lg:m-16 px-2">
          <form onSubmit={contactUsHandler} className="space-y-4 lg:w-1/2 xl:w-1/2 md:w-full sm:w-full text-sm">
            <div className="border-2 border-white">
              {successMessage && (
                <div className="w-50 rounded-md">
                  <div className="text-white px-6 py-4 border-0 relative mb-4 mt-5 bg-blue-500 rounded-md">
                    <span className="inline-block mr-5 align-middle">
                      <i className="fas fa-bell"></i>
                    </span>
                    <span className="inline-block align-middle mr-8">
                      <b className="capitalize">{successMessage}</b>
                    </span>
                  </div>
                </div>
              )}
              <div className="flex">
                  <input
                    type="text"
                    placeholder='Name'
                    id="name"
                    name="name"
                    value={enteredName}
                    onChange={setEnteredNameHandler}
                    required
                    className="px-2 placeholder-white w-full text-white bg-black border border-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={enteredEmail}
                    onChange={setEnteredEmailHandler}
                    required
                    className="px-2 placeholder-white w-full text-white bg-black border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder='Subject'
                  name="subject"
                  value={enteredSubject}
                  onChange={setEnteredSubjectHandler}
                  required
                  className="px-2 placeholder-white w-full text-white bg-black border border-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Message'
                  value={enteredMessage}
                  onChange={setEnteredMessageHandler}
                  required
                  className="px-2 placeholder-white w-full text-white bg-black border border-white focus:outline-none focus:border-blue-500 border-b-0"
                  rows="4"
                />
              </div>
              <div className="flex justify-end">
              <button
                type="submit"
                className="w-20 px-1 py-2 bg-black text-white transition-colors duration-300 text-sm"
              >
                {isLoading && (
                  <i className="fas fa-hourglass fa-spin text-white mr-2"></i>
                )}
                SEND
              </button>

              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
