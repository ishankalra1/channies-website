import Link from 'next/link';
import { useState } from 'react';
import { User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error('Please fill all required fields');
            return;
        }

        if (formData.message.length < 20 || formData.message.length > 300) {
            toast.error('Message must be between 80-300 characters');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            toast.success('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                telephone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to send message');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="responsive-container py-8">
            <Toaster 
                position="top-center"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#1F2937',
                        color: '#fff',
                        padding: '16px',
                        borderRadius: '8px',
                    },
                }}
            />
            
            <div className="rounded-lg overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Now</h2>
                            <div className="mb-8">
                                <p className="text-lg mb-2">
                                    Let's Connect and Create a Plan for Your Future
                                </p>
                                <p className="text-gray-600">
                                    Whether you're ready to start your financial journey or just have questions, we'd love to hear from you. Reach out today—we're just a message away.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter name"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Email address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="telephone"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter Telephone..."
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FileText className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter subject"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        minLength={20}
                                        maxLength={300}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter message"
                                        required
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Hint: Please enter between 20 - 300 characters.</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors ${
                                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : 'Submit'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({
                                            name: '',
                                            email: '',
                                            telephone: '',
                                            subject: '',
                                            message: ''
                                        })}
                                        className="px-6 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-gray-100 p-6 rounded-lg h-full">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Address Info</h2>
                                <div className="space-y-3">
                                    <div>
                                        <address className="text-gray-600">7150 E Camelback Road, Suite 444, Scottsdale, AZ 85251</address>
                                    </div>
                                    <div>
                                        <Link href="tel:+1 404-374-9678" className="text-gray-600 hover:text-blue-600 transition-colors">+1 404-374-9678</Link>
                                    </div>
                                    <div>
                                        <Link href="mailto:channienak@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">channienak@gmail.com</Link>
                                    </div>
                                    <div>
                                        <Link href="https://calendly.com/channienak" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                                            Schedule a Consultation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;