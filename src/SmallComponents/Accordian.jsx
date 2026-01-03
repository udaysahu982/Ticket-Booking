import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="rounded-2xl mb-6 bg-white">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left font-medium"
      >
        <span>{title}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="p-4 text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="mt-10">
    <div className="max-w-7xl mx-auto rounded-lg overflow-hidden">
      <AccordionItem
        title="What is Instant Booking?"
        content="Instant booking allows you to book tickets immediately without waiting."
        isOpen={openIndex === 0}
        onClick={() => toggle(0)}
      />

      <AccordionItem
        title="Can I cancel my ticket?"
        content="Cancellation depends on the cinema's cancellation policy."
        isOpen={openIndex === 1}
        onClick={() => toggle(1)}
      />

      <AccordionItem
        title="Is seat selection available?"
        content="Yes, you can choose your preferred seats while booking."
        isOpen={openIndex === 2}
        onClick={() => toggle(2)}
      />

      <AccordionItem
  title="Do I need to create an account to book?"
  content="Yes, creating an account helps you manage bookings, cancellations, and refunds easily."
  isOpen={openIndex === 3}
  onClick={() => toggle(3)}
/>

<AccordionItem
  title="What payment methods are supported?"
  content="We support UPI, debit cards, credit cards, net banking, and popular digital wallets."
  isOpen={openIndex === 4}
  onClick={() => toggle(4)}
/>

<AccordionItem
  title="Will I receive a booking confirmation?"
  content="Yes, a confirmation message and e-ticket will be sent via SMS and email after successful payment."
  isOpen={openIndex === 5}
  onClick={() => toggle(5)}
/>

<AccordionItem
  title="Can I book tickets for multiple people?"
  content="Yes, you can book multiple seats in a single transaction for friends or family."
  isOpen={openIndex === 6}
  onClick={() => toggle(6)}
/>

<AccordionItem
  title="What should I do if payment fails?"
  content="If payment fails but the amount is deducted, it will be automatically refunded within 3–5 working days."
  isOpen={openIndex === 7}
  onClick={() => toggle(7)}
/>

    </div>
    </div>
  );
};

export default Accordion;
