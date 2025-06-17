import React, { useState } from 'react';

export default function MemberForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feePaidTill: '',
    feeAmount: '',
    paymentMode: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = "Valid email is required";
    if (!formData.feePaidTill) newErrors.feePaidTill = "Date is required";
    if (!formData.feeAmount || Number(formData.feeAmount) <= 0) newErrors.feeAmount = "Enter a valid amount";
    if (!formData.paymentMode) newErrors.paymentMode = "Select a payment mode";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSuccess();
  };

  return (
    <div className="modal">
      <form className="member-form" onSubmit={handleSubmit}>
        <h2>Add Member</h2>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
        <input type="date" name="feePaidTill" onChange={handleChange} />
        {errors.feePaidTill && <span className="error">{errors.feePaidTill}</span>}
        <input type="number" name="feeAmount" placeholder="Membership Fee" onChange={handleChange} />
        {errors.feeAmount && <span className="error">{errors.feeAmount}</span>}
        <select name="paymentMode" onChange={handleChange}>
          <option value="">Select Payment Mode</option>
          <option value="Cash">Cash</option>
          <option value="Bank">Bank</option>
          <option value="QR">QR</option>
        </select>
        {errors.paymentMode && <span className="error">{errors.paymentMode}</span>}
        <button type="submit">Save Member</button>
      </form>
    </div>
  );
}