import ContactForm from "../form/ContactForm";

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative pb-10 md:pb-[30px] lg:pb-[47px] space-y-12 text-center section-container bg-dark-gray pt-[60px] lg:pt-[84px] contact-bg-image"
    >
      <div className="border-b-[1px] pb-24 flex flex-col md:items-center md:pb-[95px] lg:flex-row lg:justify-between lg:items-start ">
        <div className="flex flex-col space-y-5  mb-[50px] md:mb-[48px] md:w-[445px] lg:text-left lg:space-y-9">
          <h2 className="text-[40px] font-bold leading-10 tracking-[-1.14px] md:text-h1md md:leading-[72px] lg:text-xl ">
            Contact
          </h2>

          <p className="text-[16px] leading-[26px] text-light-gray md:text-base">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
