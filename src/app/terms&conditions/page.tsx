const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-8 py-5 lg:px-0 lg:py-0 mt-20">
      <div className="bg-white shadow-2xl rounded-lg max-w-[1200px] w-full mx-auto my-8 overflow-hidden">
        <header className="bg-gradient-to-r from-[#ff7e36] to-[#ffba4e] text-[#1a1f2f] p-8">
          <h1 className="text-4xl font-bold m-0">Terms and Conditions</h1>
        </header>

        <div className="p-8">
          <p className="font-['Manrope'] text-xl font-medium leading-relaxed mb-8 pb-4 border-b border-gray-200">
            Welcome to Let's Outsource. These terms and conditions outline the
            rules and regulations for the use of our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#1a1f2f] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-[#7886a2]">
              By accessing or using our services, you agree to be bound by these
              Terms and Conditions and all applicable laws and regulations. If
              you do not agree with any part of these terms, you may not use our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#1a1f2f] mb-4">
              2. Services
            </h2>
            <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-[#7886a2]">
              Let's Outsource provides outsourcing solutions including but not
              limited to taxi booking and dispatching, remote staff hiring, and
              customer support. We reserve the right to modify or discontinue
              any service without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#1a1f2f] mb-4">
              3. Confidentiality
            </h2>
            <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-[#7886a2]">
              We maintain strict confidentiality regarding all client
              information and data. Our employees are bound by non-disclosure
              agreements to protect your business interests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#1a1f2f] mb-4">
              4. Intellectual Property
            </h2>
            <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-[#7886a2]">
              All intellectual property rights related to our services,
              including but not limited to software, trademarks, and processes,
              remain the property of Let's Outsource.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#1a1f2f] mb-4">
              5. Limitation of Liability
            </h2>
            <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-[#7886a2]">
              Let's Outsource shall not be liable for any indirect, incidental,
              special, consequential or punitive damages resulting from your use
              of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#1a1f2f] mb-4">
              6. Governing Law
            </h2>
            <p className="font-['Manrope'] text-lg font-medium leading-relaxed text-[#7886a2]">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of [Your Jurisdiction], and you submit to
              the non-exclusive jurisdiction of the state and federal courts
              located in [Your Jurisdiction] for the resolution of any disputes.
            </p>
          </section>

          <p className="italic text-gray-600 font-bold text-right mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
