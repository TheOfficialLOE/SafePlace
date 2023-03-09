import Link from "next/link";

const About = () => {

    return <div>
        <Link href="/">
            <button
                className="bg-[#1e1e24] text-white mt-6 ml-6 rounded-full w-10 h-10 flex justify-center items-center active:scale-90 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                </svg>
            </button>
        </Link>
        <div className="px-6 mx-auto mt-8 max-w-7xl">
            <p className="text-white text-lg">
                Currently Listening to <span className="text-[#0ce877] underline">
                    <a href="https://open.spotify.com/track/1fLlRApgzxWweF1JTf8yM5" target="_blank" rel="noreferrer">Linkin Park, Given Up</a>
                </span> (I&apos;m gonna regret it).
            </p>
            <p className="text-white text-xl mt-8 text-clip">
                I began my programming journey in early 2018 by learning HTML. However, I soon moved on to Java for
                Android development.
                <br/>
                <br/>
                After taking a lengthy break, I discovered my true passion lay in Back-End
                development and have since been professionally working with Node.js.
                <br/>
                <br/>
                I believe that, in essence, it is more important to understand how to make software than to become too
                involved in languages and frameworks.
            </p>
        </div>
    </div>
};

export default About;