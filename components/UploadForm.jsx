'use client';

import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '@/firebase/config';
import toast from 'react-hot-toast';
import { SUBJECTS } from '@/lib/utils';

export default function UploadForm() {
  const [formData, setFormData] = useState({
    semester: '1',
    subject: '',
    year: new Date().getFullYear().toString(),
  });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please select an image');
      return;
    }

    if (!formData.subject) {
      toast.error('Please select a subject');
      return;
    }

    setUploading(true);
    const loadingToast = toast.loading('Uploading question...');

    try {
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const storageRef = ref(storage, `pastQuestions/${fileName}`);
      
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'pastQuestions'), {
        semester: parseInt(formData.semester),
        subject: formData.subject,
        year: formData.year,
        imageUrl,
        fileName,
        uploadedAt: new Date().toISOString(),
      });

      toast.success('Question uploaded successfully!', { id: loadingToast });
      
      setFormData({
        semester: '1',
        subject: '',
        year: new Date().getFullYear().toString(),
      });
      setFile(null);
      setPreview(null);
      e.target.reset();
    } catch (error) {
      console.error('Error uploading:', error);
      toast.error('Failed to upload question', { id: loadingToast });
    } finally {
      setUploading(false);
    }
  };

  const availableSubjects = SUBJECTS[parseInt(formData.semester)] || [];

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Past Question</h2>
      
      <div className="space-y-6">
        {/* Semester - ALL 8 SEMESTERS */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Semester <span className="text-red-600">*</span>
          </label>
          <select
            value={formData.semester}
            onChange={(e) => setFormData({ ...formData, semester: e.target.value, subject: '' })}
            className="input"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <option key={sem} value={sem}>Semester {sem}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-gray-500">
            Now supports all 8 semesters
          </p>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Subject <span className="text-red-600">*</span>
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="input"
            required
          >
            <option value="">Select Subject</option>
            {availableSubjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-gray-500">
            {availableSubjects.length} subjects available for Semester {formData.semester}
          </p>
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Year <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            placeholder="2024"
            className="input"
            required
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Question Image <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              required
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-teal-400 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              {preview ? (
                <div className="w-full">
                  <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg shadow-sm mb-4" />
                  <p className="text-sm text-gray-600 text-center font-medium">{file.name}</p>
                </div>
              ) : (
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-700 font-medium mb-1">Click to upload image</p>
                  <p className="text-sm text-gray-500">PNG, JPG, JPEG (Max 10MB)</p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="spinner !border-white"></div>
              <span>Uploading...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span>Upload Question</span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}