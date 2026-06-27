export default function ContactPage() {
    return (
        <div className="pb-20 text-white">
            <div className="mx-auto max-w-5xl px-6 pb-20 text-white">
                <div className="space-y-10">
                    <div className="lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8">
                        <div className="space-y-8 md:space-y-10">
                            <section className="glass-card p-8 text-center md:p-10">
                                <h1 className="mb-4 text-4xl font-bold">Contact NdaY’</h1>
                                <p className="mx-auto max-w-2xl">
                                    We welcome collaboration, inquiries, and partnerships.
                                </p>
                            </section>

                            <section className="glass-card p-8 md:p-10">
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold">Contact Information</h2>
                                    <div className="space-y-3">
                                        {/* Added +contact alias */}
                                        <p>Email: <a href="mailto:nandrianaivojaona+contact@gmail.com" className="hover:underline">nandrianaivojaona+nday_contact@gmail.com</a></p>

                                        {/* Added +partnerships alias */}
                                        <p>Partnerships: <a href="mailto:nandrianaivojaona+partnerships@gmail.com" className="hover:underline">nandrianaivojaona+nday_partnerships@gmail.com</a></p>

                                        <p>Location: Lot A62 Manohisoa Alasora 103 Antananarivo Avaradrano, Analamanga Madagascar</p>
                                    </div>
                                </div>
                            </section>


                            <section className="glass-card p-8 md:p-10">
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold">Send a Message</h2>

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder:text-white/55 outline-none"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder:text-white/55 outline-none"
                                    />

                                    <select className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white outline-none">
                                        <option className="text-black">General Inquiry</option>
                                        <option className="text-black">Partnership</option>
                                        <option className="text-black">Investment</option>
                                    </select>

                                    <textarea
                                        rows={6}
                                        placeholder="Your Message"
                                        className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder:text-white/55 outline-none"
                                    />

                                    <button className="nav-link active w-full justify-center rounded-lg border border-white/15 bg-white/15 px-5 py-3 text-sm font-medium text-white">
                                        Send Message
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
