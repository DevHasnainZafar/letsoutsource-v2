const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center px-8 py-5 lg:px-0 lg:py-0">
      <div className="bg-white shadow-2xl rounded-lg max-w-[1200px] w-full mx-auto my-8 overflow-hidden">
        <header className="bg-gradient-to-r from-[#ff7e36] to-[#ffba4e] text-[#1a1f2f] p-8 flex items-center">
          <h1 className="text-4xl font-bold m-0">Privacy Policy</h1>
        </header>

        <div className="p-8">
          <p className=" text-xl font-medium leading-relaxed mb-8 pb-4 border-b border-gray-200">
            Welcome to Let's Outsource. Your privacy is important to us, and we
            are committed to safeguarding your personal information. This policy
            outlines how we collect, use, and protect your data.
          </p>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              1. Introduction
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              Your privacy is important to us, and we are committed to
              safeguarding your personal information. This policy outlines how
              we collect, use, and protect your data.
            </p>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              2. Information We Collect
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              We may collect the following information:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li className=" text-lg font-medium leading-relaxed">
                Personal identification information (Name, email address, etc.)
              </li>
              <li className=" text-lg font-medium leading-relaxed">
                Dispatching and booking data related to your services
              </li>
              <li className=" text-lg font-medium leading-relaxed">
                Technical data (IP address, browser type) for site optimization
              </li>
            </ul>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              3. How We Use Your Information
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              The information we collect is used for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li className=" text-lg font-medium leading-relaxed">
                Providing and improving our services
              </li>
              <li className=" text-lg font-medium leading-relaxed">
                Processing dispatch requests and bookings
              </li>
              <li className=" text-lg font-medium leading-relaxed">
                Ensuring smooth system integration with our partners
              </li>
              <li className=" text-lg font-medium leading-relaxed">
                Communicating with you regarding updates and promotions
              </li>
            </ul>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              4. Sharing Your Information
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              We do not share your personal information with third parties
              unless it is necessary for providing our services or if required
              by law.
            </p>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              5. Security of Your Data
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              We implement standard security measures to protect your
              information from unauthorized access. However, we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              6. Your Data Protection Rights
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              You have the right to access, update, or delete your personal
              information. Please contact us to exercise these rights.
            </p>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              7. Changes to Our Privacy Policy
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              We may update this Privacy Policy periodically. Any changes will
              be posted here with an updated effective date.
            </p>
          </section>

          <section className=" text-base font-medium leading-relaxed text-[#1a1f2f] mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#ff7e36] mb-4">
              8. Contact Us
            </h2>
            <p className=" text-lg font-medium leading-relaxed text-[#1a1f2f]">
              If you have questions about this Privacy Policy, please contact us
              at:
              <br />
              <a
                href="mailto:jsher@letsoutsource.com"
                className="text-[#ff7e36] no-underline hover:underline block mt-1"
              >
                jsher@letsoutsource.com
              </a>
              <a
                href="mailto:simon@letsoutsource.com"
                className="text-[#ff7e36] no-underline hover:underline block mt-1"
              >
                simon@letsoutsource.com
              </a>
              <a
                href="mailto:mgt.letsoutsource@gmail.com"
                className="text-[#ff7e36] no-underline hover:underline block mt-1"
              >
                mgt.letsoutsource@gmail.com
              </a>
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

export default PrivacyPolicy;
