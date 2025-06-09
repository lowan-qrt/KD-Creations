"use client";
import { useState } from "react";
import Button from "../../components/button";

export default function AboutPage() {
    const maxLength = 1000;
    const [message, setMessage] = useState("");
    return (
        <main className="flex flex-col grow m-[5%]">
            <div className="flex justify-center flex-wrap w-full m-auto">
                <section className="bg-slate-900 px-[4rem] py-[1.5rem] rounded-l-3xl text-white min-w-[40vh] w-[50%] break-words">
                    <h1 className="text-5xl font-bold">Contactez-moi</h1>

                    <br />

                    <p className="mt-2  text-xl">
                        Besoin d’aide ou d’un renseignement ?
                    </p>
                    <p className="mt-2 text-xl">
                        Remplissez le formulaire et je vous recontacterai dans
                        les plus brefs délais.
                    </p>
                </section>

                <form
                    action="POST"
                    className="flex flex-col bg-slate-300 px-[4rem] py-[1.5rem] rounded-r-3xl w-[50%]"
                >
                    <label htmlFor="name">Votre Nom :</label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="mt-1 rounded-md bg-white py-1.5 pl-3 pr-1.5 focus:outline-2 focus:outline-offset-2 focus:outline-slate-900"
                        placeholder="Jeanne Dupont"
                    />

                    <label className="mt-4" htmlFor="email">
                        Votre Email :
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="mt-1 rounded-md bg-white py-1.5 pl-3 pr-1.5 focus:outline-2 focus:outline-offset-2 focus:outline-slate-900"
                        placeholder="email@exemple.com"
                    />

                    <label className="mt-4" htmlFor="message">
                        Votre Message :
                    </label>
                    <div className="relative">
                        <textarea
                            id="message"
                            maxLength={maxLength}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-1 rounded-md bg-white pt-1.5 pb-8 px-3 focus:outline-2 focus:outline-offset-2 focus:outline-slate-900 overflow-auto resize-none text-sm w-full h-25"
                            placeholder="Votre message..."
                        />
                        <div
                            className={`absolute bottom-2.5 right-5 text-xs select-none bg-gray-100 rounded-md p-1 ${
                                message.length === maxLength
                                    ? "text-red-500"
                                    : "text-gray-500"
                            }`}
                        >
                            {message.length} / {maxLength}
                        </div>
                    </div>

                    <Button className="mt-4">Envoyer</Button>
                </form>
            </div>
        </main>
    );
}
