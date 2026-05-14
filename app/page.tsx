export default function JuryFitnessWebsite() {
  const services = [
    {
      title: "1-on-1 Personal Training",
      description:
        "Customized workout plans focused on strength, mobility, fat loss, and overall wellness.",
    },
    {
      title: "Nutrition Coaching",
      description:
        "Flexible meal guidance and dietary recommendations tailored to your goals and lifestyle.",
    },
    {
      title: "Online Accountability",
      description:
        "Weekly check-ins, progress tracking, and motivation to help clients stay consistent.",
    },
  ];

  const plans = [
    {
      name: "Starter Plan",
      price: "$49/mo",
      features: [
        "Workout Program",
        "Basic Meal Suggestions",
        "Email Support",
      ],
    },
    {
      name: "Transformation Plan",
      price: "$99/mo",
      features: [
        "Custom Workout Plan",
        "Personalized Nutrition Guidance",
        "Weekly Check-ins",
        "Progress Tracking",
      ],
    },
    {
      name: "Elite Coaching",
      price: "$179/mo",
      features: [
        "Full Coaching Access",
        "Custom Macros & Meal Planning",
        "Unlimited Messaging",
        "Video Consultations",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "I lost 25 pounds while building confidence and healthier habits. The nutrition coaching made everything manageable.",
    },
    {
      name: "James T.",
      text: "The workouts were personalized to my schedule and fitness level. I’ve never felt stronger.",
    },
    {
      name: "Emily R.",
      text: "The accountability and meal guidance helped me stay consistent for the first time.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-emerald-400 text-sm mb-4">
                Personal Training & Nutrition Coaching
              </p>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                Train Hard.
                <span className="block text-emerald-400">Live Stronger.</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Jury Fitness helps clients achieve their fitness goals with customized workout programs, dietary coaching, accountability support, and long-term lifestyle transformation plans.
              </p>

              <div className="flex flex-wrap gap-4">
               <a
  href="https://calendly.com/app/scheduling/meeting_types/user/me"
  target="_blank"
  className="bg-emerald-500 hover:bg-emerald-400 transition px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg inline-block"
>
  Book a Consultation
</a> 

                <button className="border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 transition px-6 py-3 rounded-2xl text-lg font-semibold">
                  View Programs
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/80 border border-slate-800 rounded-[2rem] p-8 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-4xl font-bold text-emerald-400">150+</p>
                    <p className="text-slate-300 mt-2">Clients Coached</p>
                  </div>

                  <div className="bg-slate-800 rounded-2xl p-5">
                    <p className="text-4xl font-bold text-cyan-400">92%</p>
                    <p className="text-slate-300 mt-2">Client Retention</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl p-6 text-slate-950">
                  <h3 className="text-2xl font-bold mb-3">
                    Free Fitness & Nutrition Consultation
                  </h3>
                  <p className="mb-5 font-medium">
                    Help clients identify fitness goals, improve nutrition habits, and receive a personalized transformation strategy.
                  </p>

                  <form
  action="https://formspree.io/f/xlgzkgze"
  method="POST"
  className="space-y-3"
>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    
                    />
                    <button className="w-full bg-slate-950 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-emerald-400 uppercase tracking-widest text-sm mb-3">
            Services
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Customized Coaching Through Jury Fitness
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Create personalized workout plans and dietary programs that help clients build strength, lose fat, improve performance, and stay consistent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-400 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-2xl">
                💪
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meal Guidance Section */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
              Dietary Support
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Custom Workout Plans & Dietary Options
            </h2>

            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                Design nutrition plans for weight loss, muscle gain, athletic performance, and overall health improvement.
              </p>

              <p>
                Build customized meal plans, grocery lists, hydration goals, and macro-based nutrition guidance tailored to each client.
              </p>

              <p>
                Combine structured workout programming with sustainable eating habits to help clients maintain long-term success.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">
                Weight Loss Guidance
              </h3>
              <p className="text-slate-300">
                Balanced calorie management with satisfying meal ideas and
                portion strategies.
              </p>
            </div>

            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">
                Muscle Building Nutrition
              </h3>
              <p className="text-slate-300">
                High-protein meal planning and recovery-focused nutrition for
                performance and growth.
              </p>
            </div>

            <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                Lifestyle Coaching
              </h3>
              <p className="text-slate-300">
                Nutrition support for busy schedules, energy improvement, and
                sustainable healthy habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-emerald-400 uppercase tracking-widest text-sm mb-3">
            Membership Plans
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Flexible Coaching Packages
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Offer multiple levels of coaching to fit different client goals and
            budgets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex flex-col hover:border-emerald-400 transition"
            >
              <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
              <p className="text-5xl font-black text-emerald-400 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <span className="text-emerald-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
<a
  href={
    plan.name === "Starter Plan"
      ? "https://buy.stripe.com/test_4gM8wQ6YG9Y24Jy5aYgA801"
      : plan.name === "Transformation Plan"
      ? "https://buy.stripe.com/test_3cIdRafvc3zE0ticDqgA800"
      : "https://buy.stripe.com/test_cNi00k6YG2vA4JyavigA802"
  }
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 bg-emerald-500 hover:bg-emerald-400 transition text-slate-950 font-bold py-3 rounded-2xl text-center"
>
  Choose Plan
</a>
              
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
              Success Stories
            </p>
            <h2 className="text-4xl font-bold">
              What Clients Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
              >
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  “{testimonial.text}”
                </p>
                <p className="font-bold text-white">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Contact
        </p>

        <h2 className="text-5xl font-black mb-6">
          Ready to Help People Transform Their Health?
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Start building your personal training and nutrition coaching business
          with a professional online presence.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 w-full md:w-96 outline-none focus:border-emerald-400"
          />

          <button className="bg-emerald-500 hover:bg-emerald-400 transition text-slate-950 font-bold px-8 py-4 rounded-2xl">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <p>© 2026 Jury Fitness. All rights reserved.</p>
      </footer>
    </div>
  );
}

