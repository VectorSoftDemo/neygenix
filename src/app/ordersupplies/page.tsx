'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

// Type definitions
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
    // recaptcha: string;
    // Flattened supplies fields
    specimenAbsorbentBags: string;
    labShippingBags: string;
    returnShippingLabels: string;
    clearLinerBags: string;
    shippingBoxes: string;
    toxicologyLabRequisitionForms: string;
    // Drug test cups
    sevenPanelDiscover: string;
    twelvePanelDiscover: string;
    // Drug test dip cards
    fourPanelDiscover: string;
    fivePanelDiscover: string;
    sixPanelDiscover: string;
    // Other items
    clearUrineSpecimenCups: string;
    oralFluidCollectionDevices: string;
    pharmacogenomicsLabRequisitionForms: string;
    buccalSwabs: string;
    hereditaryCancerGenomicsLabRequisitionForms: string;
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
        // recaptcha: '',
        specimenAbsorbentBags: '',
        labShippingBags: '',
        returnShippingLabels: '',
        clearLinerBags: '',
        shippingBoxes: '',
        toxicologyLabRequisitionForms: '',
        sevenPanelDiscover: '',
        twelvePanelDiscover: '',
        fourPanelDiscover: '',
        fivePanelDiscover: '',
        sixPanelDiscover: '',
        clearUrineSpecimenCups: '',
        oralFluidCollectionDevices: '',
        pharmacogenomicsLabRequisitionForms: '',
        buccalSwabs: '',
        hereditaryCancerGenomicsLabRequisitionForms: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
        if (!formData.deliveryMethod.trim()) newErrors.deliveryMethod = 'Delivery method is required';

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Email confirmation
        if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = 'Emails do not match';
        }

      

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // FOR NODEMAILER USE THIS 

    // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();

    //     if (!validateForm()) {
    //         setErrorMessage("Please correct the form errors before submitting");
    //         // setShowErrorToast(true);
    //         return;
    //     }

    //     setIsSubmitting(true);

    //     try {

    //         const res = await fetch("/api/sendorder", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify(formData),
    //         });


    //         // Check if response is ok
    //         if (!res.ok) {
    //             throw new Error(`HTTP error! status: ${res.status}`);
    //         }

    //         const result = await res.json();

    //         if (result.success) {
    //             toast.success('Message sent successfully to Neugenix. Thank you!', { icon: "✅" });

    //             // Reset form after successful submission
    //             setFormData({
    //                 accountName: '',
    //                 phone: '',
    //                 email: '',
    //                 confirmEmail: '',
    //                 address: '',
    //                 city: '',
    //                 state: '',
    //                 zipCode: '',
    //                 deliveryMethod: '',
    //                 message: '',
    //                 recaptcha: '',
    //                 supplies: {},
    //                 drugTestCups: {},
    //                 drugTestDipCards: {},
    //                 otherItems: {},
    //             });
    //         } else {
    //             setErrorMessage(result.message || "Unknown error occurred");
    //             // setShowErrorToast(true);
    //             toast.error("Something went wrong",{icon : '❌'})
    //         }
    //     } catch (error) {
    //         // console.error('Submit error:', error);
    //         let errorMsg = "Error sending order request. Please try again.";

    //         if (error instanceof Error) {
    //             errorMsg = `Error: ${error.message}`;
    //         }

    //         setErrorMessage(errorMsg);
    //         // setShowErrorToast(true);
    //         toast.error("Error occured , try again later", { icon: '❌' })
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };



    //FOR WEB3FORMS USE THIS
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            setErrorMessage("Please correct the form errors before submitting");
            toast.error("Please correct the form errors before submitting", { icon: "❌" });
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                access_key: "274f46ab-fb85-467e-9749-d4a20be47d59", // Your actual Web3Forms access key (current raghu@vectorsoft.com)
                subject: "New Supply Order Request from Neugenix website",
                ...formData,
            };

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const result = await res.json();

            if (result.success) {
                toast.success("Message sent successfully to Neugenix. Thank you!", { icon: "✅" });
                setFormData({
                    accountName: "",
                    phone: "",
                    email: "",
                    confirmEmail: "",
                    address: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    deliveryMethod: "",
                    message: "",
                    // recaptcha: "",
                    specimenAbsorbentBags: "",
                    labShippingBags: "",
                    returnShippingLabels: "",
                    clearLinerBags: "",
                    shippingBoxes: "",
                    toxicologyLabRequisitionForms: "",
                    sevenPanelDiscover: "",
                    twelvePanelDiscover: "",
                    fourPanelDiscover: "",
                    fivePanelDiscover: "",
                    sixPanelDiscover: "",
                    clearUrineSpecimenCups: "",
                    oralFluidCollectionDevices: "",
                    pharmacogenomicsLabRequisitionForms: "",
                    buccalSwabs: "",
                    hereditaryCancerGenomicsLabRequisitionForms: "",
                });
                setErrorMessage("");
            } else {
                setErrorMessage(result.message || "Unknown error occurred");
                toast.error(result.message || "Something went wrong", { icon: "❌" });
            }
        } catch (error) {
            let errorMsg = "Error sending order request. Please try again.";
            if (error instanceof Error) {
                errorMsg = `Error: ${error.message}`;
            }
            setErrorMessage(errorMsg);
            toast.error("Error occurred, try again later", { icon: "❌" });
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
        <>
            <main className="min-h-screen mt-11 lg:mt-20 ">
                <div className="max-w-6xl mx-1 md:mx-auto lg:my-2">
                    <div className="bg-white rounded-3xl shadow-2xl p-3 sm:p-6 md:p-8 lg:p-12">
                        <div className="text-center mb-8 sm:mb-12">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#144afc] mb-2 sm:mb-4">
                                Supply Order Request
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Fill out this form to request your laboratory supplies and testing materials
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-12">
                            {/* Account Information */}
                            <div className="bg-gray-50 rounded-2xl p-2 sm:p-6 md:p-8">
                                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-8 flex items-center">
                                    <div className="bg-blue-600 rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold mr-2 xs:mr-3 sm:mr-4">1</div>
                                    Account Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                                    {accountFields.map(({ name, placeholder, type }) => (
                                        <div key={name} className="space-y-1 xs:space-y-2">
                                            <input
                                                type={type}
                                                name={name}
                                                placeholder={placeholder}
                                                value={formData[name as keyof FormData] as string}
                                                onChange={handleInputChange}
                                                className={`w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-3 sm:py-4 rounded-xl border-2 text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200 ${errors[name]
                                                    ? 'border-red-500 bg-red-50 focus:border-red-500'
                                                    : 'border-gray-200 bg-white hover:border-blue-300 focus:border-blue-500'
                                                    }`}
                                            />
                                            {errors[name] && (
                                                <p className="text-red-500 text-xs xs:text-sm font-medium">{errors[name]}</p>
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
                            <article
                                className="bg-gray-50 rounded-2xl p-2 sm:p-6 md:p-8"
                                aria-labelledby="deliverySectionTitle"
                            >
                                <h2
                                    id="deliverySectionTitle"
                                    className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-8 flex items-center"
                                >
                                    <div className="bg-blue-600 rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold mr-2 xs:mr-3 sm:mr-4">
                                        6
                                    </div>
                                    Delivery Method
                                </h2>

                                <label
                                    htmlFor="deliveryMethod"
                                    className="block mb-2 text-sm font-medium text-gray-700"
                                >
                                    Shipping Method <span className="text-red-500">*</span>
                                </label>

                                <select
                                    id="deliveryMethod"
                                    name="deliveryMethod"
                                    value={formData.deliveryMethod}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full sm:w-80 px-2 xs:px-3 sm:px-4 py-2 xs:py-3 sm:py-4 rounded-xl border-2 text-xs xs:text-sm sm:text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 ${errors.deliveryMethod
                                        ? 'border-red-500 bg-red-50 focus:border-red-500'
                                        : 'border-gray-200 bg-white focus:border-blue-500'
                                        }`}
                                >
                                    <option value="">Select Shipping Method</option>
                                    <option value="Standard">Standard Shipping</option>
                                    <option value="Express">Express Shipping</option>
                                    <option value="Overnight">Overnight Shipping</option>
                                </select>
                                {errors.deliveryMethod && (
                                    <p className="text-red-500 text-xs xs:text-sm font-medium mt-2">{errors.deliveryMethod}</p>
                                )}
                            </article>

                            {/* Message Section */}
                            <article className="bg-gray-50 rounded-2xl p-2 sm:p-6 md:p-8">
                                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-8 flex items-center">
                                    <div className="bg-blue-600 rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold mr-2 xs:mr-3 sm:mr-4">7</div>
                                    Additional Notes
                                </h2>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className={`w-full px-2 xs:px-3 sm:px-4 py-2 xs:py-3 sm:py-4 rounded-xl border-2 text-xs xs:text-sm sm:text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 resize-none ${errors.message
                                        ? 'border-red-500 bg-red-50 focus:border-red-500'
                                        : 'border-gray-200 bg-white focus:border-blue-500'
                                        }`}
                                    placeholder="Any special instructions or additional information..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs xs:text-sm font-medium mt-2">{errors.message}</p>
                                )}
                            </article>

                            {/* Submit Section */}
                            <article className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-3 sm:p-6 md:p-10 text-center shadow-xl flex flex-col items-center">
                                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 xs:mb-4 sm:mb-8 drop-shadow-lg">
                                    Ready to Submit Your Order?
                                </h2>

                                <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className={`w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide transition-all duration-300 transform shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 ${isSubmitting
                                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            : 'bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-2xl'
                                            }`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Order Request"}
                                    </button>

                                    <p className="text-xs sm:text-sm text-white/80 mt-2">
                                        Please review your order before submitting. You will receive a confirmation email.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>

            {/* Loading Overlay */}
            {/* <LoadingOverlay isVisible={isSubmitting} /> */}

            {/* Success Toast */}
            {/* <SuccessToast
                isVisible={showSuccessToast}
                onClose={() => setShowSuccessToast(false)}
            /> */}

            {/* Error Toast */}
            {/* <ErrorToast
                isVisible={showErrorToast}
                message={errorMessage}
                onClose={() => setShowErrorToast(false)}
            /> */}

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
            `}</style>
        </>
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
}: SectionProps & { sectionNumber: number }) => {
    // Map section keys to actual field names
    const getFieldName = (sectionKey: string, label: string): string => {
        const fieldMap: { [key: string]: { [key: string]: string } } = {
            supplies: {
                'Specimen / Absorbent Bags': 'specimenAbsorbentBags',
                'Lab Shipping Bags': 'labShippingBags',
                'Return Shipping Labels': 'returnShippingLabels',
                'Clear Liner Bags': 'clearLinerBags',
                'Shipping Boxes': 'shippingBoxes',
                'Toxicology Lab Requisition Forms': 'toxicologyLabRequisitionForms',
            },
            drugTestCups: {
                '7-Panel Discover': 'sevenPanelDiscover',
                '12-Panel Discover': 'twelvePanelDiscover',
            },
            drugTestDipCards: {
                '4-Panel Discover': 'fourPanelDiscover',
                '5-Panel Discover': 'fivePanelDiscover',
                '6-Panel Discover': 'sixPanelDiscover',
            },
            otherItems: {
                'Clear Urine Specimen Cups': 'clearUrineSpecimenCups',
                'Oral Fluid Collection Devices (for toxicology only)': 'oralFluidCollectionDevices',
                'Pharmacogenomics Lab Requisition Forms': 'pharmacogenomicsLabRequisitionForms',
                'Buccal Swabs (2 per patient)': 'buccalSwabs',
                'Hereditary Cancer Genomics Lab Requisition Forms': 'hereditaryCancerGenomicsLabRequisitionForms',
            }
        };

        return fieldMap[sectionKey]?.[label] || label;
    };

    return (
        <div className="bg-gray-50 rounded-2xl p-2 sm:p-6 md:p-8">
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-8 flex items-center">
                <div className="bg-blue-600 rounded-full w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white text-xs xs:text-sm sm:text-base md:text-lg font-bold mr-2 xs:mr-3 sm:mr-4">
                    {sectionNumber}
                </div>
                {title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                {inputs.map((item, i) => {
                    const fieldName = getFieldName(sectionKey, item.label);
                    return (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-3 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="space-y-1 xs:space-y-2 sm:space-y-3">
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{item.label}</h3>

                                {item.note && (
                                    <p className="text-xs sm:text-sm text-gray-600 p-2 rounded-lg font-mono">
                                        {item.note}
                                    </p>
                                )}

                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
                                    <input
                                        type={item.type || 'text'}
                                        name={fieldName}
                                        value={formData[fieldName as keyof FormData] as string || ''}
                                        onChange={onChange}
                                        placeholder="Quantity"
                                        className="flex-1 sm:w-32 px-2 xs:px-3 sm:px-3 py-2 xs:py-2.5 sm:py-2.5 rounded-lg border-2 border-gray-200 bg-white text-xs xs:text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                                    />

                                    {item.price && (
                                        <div className="bg-green-50 px-2 xs:px-2.5 sm:px-3 py-1.5 xs:py-2 sm:py-2 rounded-lg border border-green-200">
                                            <span className="text-green-800 font-semibold text-xs sm:text-sm">{item.price}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderSupply;