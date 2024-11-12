import React, { useState } from 'react';
import Navb from './Navb';

export const Profile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('User');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number format
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  // Handle form submission
  const handleSave = () => {
    // Check email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');

    // Check phone number
    if (!validatePhoneNumber(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }
    setPhoneError('');

    const profileData = { name, email, phone, userType, image };
    console.log("Profile Saved:", profileData);
    alert("Profile saved successfully!");
  };

  return (
    <>
      <Navb />
      <section className="max-w-[1500px] mx-auto  min-h-screen flex flex-col items-center  justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">Profile Page</h1>

          {/* Profile Image Upload */}
          <div className="flex justify-center mb-4">
            <label htmlFor="avatar" className="relative cursor-pointer">
              {image ? (
                <img
                  src={image}
                  alt="Avatar"
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-gray-300 object-cover"
                />
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm sm:text-base">Upload Image</span>
                </div>
              )}
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Profile Information Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Type</label>
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="type"
                    value="Artist"
                    checked={userType === 'Artist'}
                    onChange={(e) => setUserType(e.target.value)}
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                  <span>Artist</span>
                </label>
                <label className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <input
                    type="radio"
                    name="type"
                    value="User"
                    checked={userType === 'User'}
                    onChange={(e) => setUserType(e.target.value)}
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                  <span>User</span>
                </label>
              </div>
            </div>

            {/* Save Button */}
            <button
              type="button"
              onClick={handleSave}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

