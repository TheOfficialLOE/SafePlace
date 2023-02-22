import Link from "next/link";

const About = () => {
    return <div>
        <Link href="/">
            <button className="bg-[#1e1e24] text-white mt-6 ml-6 rounded-full w-10 h-10 flex justify-center items-center active:scale-90 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
        </Link>
        <p className="text-white m-8 text-xl" >Lorem ipsum dolor sit amet.</p>
        <div
            className="inline-block text-sm font-medium text-center ml-8 border-b border-b-[#1e1e24]">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2 inline-block p-4 text-[#0ce877] border-b-2 border-[#0ce877] rounded-t-lg">
                    About me
                </li>
                <li className="mr-2 inline-block p-4 text-gray-600 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-b-gray-400">
                    Skills
                </li>
                <li className="mr-2 inline-block p-4 text-gray-600 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-b-gray-400">
                    Projects
                </li>
            </ul>
        </div>
        <p className="text-white text-lg mx-8 mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci at, aut, autem, consequatur cum cupiditate dolore ea et exercitationem fugit harum laboriosam molestiae molestias officiis omnis porro quae quaerat quod quos reiciendis repellendus sapiente sunt totam ullam voluptatem. Explicabo facilis fugit hic laudantium libero magnam quo ut vel. Accusamus, amet consequatur, doloribus earum illo iure iusto labore minus modi molestias natus possimus, reprehenderit rerum suscipit voluptas? Dolores, incidunt, quod? Aliquam amet, aperiam, commodi consequatur corporis dolorem et eveniet facilis inventore itaque, iure mollitia necessitatibus nemo neque nihil nostrum quis quos soluta suscipit totam ut voluptate voluptatibus. Architecto commodi eaque enim eos eum laboriosam nam perspiciatis quia, quis voluptates! Ad autem delectus dolor esse eveniet id inventore labore numquam officiis omnis praesentium, quasi recusandae reiciendis saepe sit suscipit tempora ullam, unde vitae voluptatem! Aut blanditiis consequatur eaque non odit, officiis quas veniam voluptatem. Aliquam amet animi architecto consequatur cumque dicta dolorem doloribus enim esse eveniet hic id inventore iusto laborum maxime modi nemo neque nesciunt odit officiis optio possimus, praesentium provident, quo ratione rem reprehenderit saepe sapiente tempore totam ullam veniam vero voluptatem. Est expedita modi, nulla provident quaerat quo totam! At, culpa cupiditate earum natus odit ratione veritatis.</p>
    </div>
};

export default About;