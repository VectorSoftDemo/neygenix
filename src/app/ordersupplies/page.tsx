'use client';

import { useState } from 'react';

// Type definitions
interface NestedSection {
    [key: string]: string;
}

interface FormData {
    accountName: string;
    phone: string;
    email: string;
    confirmEmail: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    deliveryMethod: string;
    message: string;
    recaptcha: string;
    supplies: NestedSection;
    drugTestCups: NestedSection;
    drugTestDipCards: NestedSection;
    otherItems: NestedSection;
}

interface InputItem {
    label: string;
    note?: string;
    price?: string;
    type?: string;
}

interface SectionProps {
    title: string;
    inputs: InputItem[];
    sectionKey: string;
    formData: FormData;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
        section?: string,
        label?: string
    ) => void;
}

const OrderSupply = () => {
    const [formData, setFormData] = useState<FormData>({
        accountName: '',
        phone: '',
        email: '',
        confirmEmail: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        deliveryMethod: '',
        message: '',
        recaptcha: '',
        supplies: {},
        drugTestCups: {},
        drugTestDipCards: {},
        otherItems: {},
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
        section?: string,
        label?: string
    ) => {
        const { name, value } = e.target;

        // Clear error when user starts typing
        if (errors[name] || (section && label && errors[`${section}.${label}`])) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                if (section && label) delete newErrors[`${section}.${label}`];
                return newErrors;
            });
        }

        setFormData((prev) => {
            if (section && label) {
                const sectionData = prev[section as keyof FormData] as NestedSection || {};
                return {
                    ...prev,
                    [section]: {
                        ...sectionData,
                        [label]: value,
                    },
                };
            } else {
                return {
                    ...prev,
                    [name]: value,
                };
            }
        });
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        // Required field validation
        if (!formData.accountName.trim()) newErrors.accountName = 'Account name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.confirmEmail.trim()) newErrors.confirmEmail = 'Please confirm your email';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Email confirmation
        if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = 'Emails do not match';
        }

        // Phone validation (basic)
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form submitted:', formData);
            alert('Order request submitted successfully!');
        } catch (error) {
            alert('Error submitting form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const accountFields = [
        { name: 'accountName', placeholder: 'Account Name', type: 'text' },
        { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
        { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'confirmEmail', placeholder: 'Confirm Email', type: 'email' },
        { name: 'address', placeholder: 'Address', type: 'text' },
        { name: 'city', placeholder: 'City', type: 'text' },
        { name: 'state', placeholder: 'State', type: 'text' },
        { name: 'zipCode', placeholder: 'Zip Code', type: 'text' },
    ];

    return (
        <main className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Supply Order Request
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Fill out this form to request your laboratory supplies and testing materials
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Account Information */}
                        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg font-bold mr-4">1</div>
                                Account Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {accountFields.map(({ name, placeholder, type }) => (
                                    <div key={name} className="space-y-2">
                                        <input
                                            type={type}
                                            name={name}
                                            placeholder={placeholder}
                                            value={formData[name as keyof FormData] as string}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-4 rounded-xl border-2 text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200 ${errors[name]
                                                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                                                    : 'border-gray-200 bg-white hover:border-blue-300 focus:border-blue-500'
                                                }`}
                                        />
                                        {errors[name] && (
                                            <p className="text-red-500 text-sm font-medium">{errors[name]}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Sections */}
                        <Section
                            title="Supplies"
                            sectionKey="supplies"
                            formData={formData}
                            onChange={handleInputChange}
                            sectionNumber={2}
                            inputs={[
                                { label: 'Specimen / Absorbent Bags', price: 'N/C (1 per sample)' },
                                { label: 'Lab Shipping Bags', price: 'N/C (1 per 10 samples)', type: 'number' },
                                { label: 'Return Shipping Labels', price: 'N/C (1 per 10 samples)' },
                                { label: 'Clear Liner Bags', price: 'N/C (1 per 10 samples)' },
                                { label: 'Shipping Boxes', price: 'N/C (Packaged in quantity of 20)' },
                                { label: 'Toxicology Lab Requisition Forms', price: 'N/C' },
                            ]}
                        />

                        <Section
                            title="Drug Test Cups"
                            sectionKey="drugTestCups"
                            formData={formData}
                            onChange={handleInputChange}
                            sectionNumber={3}
                            inputs={[
                                {
                                    label: '7-Panel Discover',
                                    note: '(BZO/BAR/COC/THC/MET/MOP/MTD/OXY/MDMA/AMP/PPX/BUP)',
                                    price: '$75.00/25 ($3.00 each)',
                                },
                                {
                                    label: '12-Panel Discover',
                                    note: '(BZO/BAR/COC/THC/MET/MOP/MTD/OXY/MDMA/PCP/AMP/BUP)',
                                    price: '$74.25/25 ($2.97 each)',
                                },
                            ]}
                        />

                        <Section
                            title="Drug Test Dip Cards"
                            sectionKey="drugTestDipCards"
                            formData={formData}
                            onChange={handleInputChange}
                            sectionNumber={4}
                            inputs={[
                                { label: '4-Panel Discover', note: '(COC/THC/MET/OPI)', price: '$24.75/25 ($.99 each)' },
                                { label: '5-Panel Discover', note: '(BZO/THC/OPI/AMP/BUP)', price: '$30.25/25 ($1.25 each)' },
                                { label: '6-Panel Discover', note: '(BZO/COC/THC/MET/OPI/OXY)', price: '$39.25/25 ($1.60 each)' },
                            ]}
                        />

                        <Section
                            title="Other Items"
                            sectionKey="otherItems"
                            formData={formData}
                            onChange={handleInputChange}
                            sectionNumber={5}
                            inputs={[
                                { label: 'Clear Urine Specimen Cups', price: 'N/C' },
                                { label: 'Oral Fluid Collection Devices (for toxicology only)', price: 'N/C' },
                                { label: 'Pharmacogenomics Lab Requisition Forms', price: 'N/C', type: 'number' },
                                { label: 'Buccal Swabs (2 per patient)', price: 'N/C' },
                                { label: 'Hereditary Cancer Genomics Lab Requisition Forms', price: 'N/C' },
                            ]}
                        />

                        {/* Delivery Section */}
                        <article className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg font-bold mr-4">6</div>
                                Delivery Method
                            </h2>

                            <select
                                name="deliveryMethod"
                                value={formData.deliveryMethod}
                                onChange={handleInputChange}
                                className="w-full sm:w-80 px-4 py-4 rounded-xl border-2 border-gray-200 bg-white text-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                            >
                                <option value="">Select Shipping Method</option>
                                <option value="Standard">Standard Shipping</option>
                                <option value="Express">Express Shipping</option>
                                <option value="Overnight">Overnight Shipping</option>
                            </select>
                        </article>

                        {/* Message Section */}
                        <article className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
                                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg font-bold mr-4">7</div>
                                Additional Notes
                            </h2>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-white text-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 resize-none"
                                placeholder="Any special instructions or additional information..."
                            />
                        </article>

                        {/* Submit Section */}
                        <article className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                                Ready to Submit Your Order?
                            </h2>

                            <div className="space-y-6 space-x-4">
                                {/* Mock reCAPTCHA */}
                                <div className="inline-flex items-center space-x-3 bg-white rounded-lg p-4">
                                    <input
                                        type="checkbox"
                                        id="recaptcha"
                                        className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                    <label htmlFor="recaptcha" className="text-gray-700 font-medium">
                                        I'm not a robot
                                    </label>
                                    <div className="text-xs text-gray-500">reCAPTCHA</div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`px-8 py-4 rounded-xl font-bold text-xl uppercase tracking-wide transition-all duration-300 transform ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 shadow-lg hover:shadow-xl'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
                                            <span>Submitting...</span>
                                        </div>
                                    ) : (
                                        'Submit Order Request'
                                    )}
                                </button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    );
};

// Enhanced Section Component
const Section = ({
    title,
    inputs,
    sectionKey,
    formData,
    onChange,
    sectionNumber
}: SectionProps & { sectionNumber: number }) => (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg font-bold mr-4">
                {sectionNumber}
            </div>
            {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {inputs.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>

                        {item.note && (
                            <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded-lg font-mono">
                                {item.note}
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                            <input
                                type={item.type || 'text'}
                                name={item.label}
                                value={
                                    ((formData as any)[sectionKey]?.[item.label]) || ''
                                }
                                onChange={(e) => onChange(e, sectionKey, item.label)}
                                placeholder="Quantity"
                                className="flex-1 sm:w-32 px-3 py-2 rounded-lg border-2 border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                            />


                            {item.price && (
                                <div className="bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                                    <span className="text-green-800 font-semibold text-sm">{item.price}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default OrderSupply;