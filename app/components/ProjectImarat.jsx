const ProjectDetails = ({selectedProject}) => {
    const projectDetails = {
        'Mall of Imarat': {
            description: 'Nestled in the hub of IMARAT Downtown, the Mall of IMARAT appears as a vision to' +
                    ' visitors and onlookers, with its elegant mid-century Arabian architecture and i' +
                    'ntricate design details. Its excellent location more than enhances this exuberan' +
                    't retail and leisure destination – it allows it to thrive in all its aesthetic g' +
                    'lory. The Mall offers premier dining and entertainment options and haute-couture' +
                    ' fashion and retail choices, along with the majestic Courtyard by Marriott Hotel' +
                    ', a world-class hotel brand.',

            image: '/images/moi.png',
            location: 'Islamabad Expressway, Islamabad, Pakistan',
            status: 'Under Construction'
        },
        'Florence Galleria': {
            description: 'Representing the rebirth of the Renaissance era, Florence Galleria is the first-' +
                    'ever Luxury Boutique Mall and an International Hotel in the heart of the twin ci' +
                    'ties. An epitome of luxury, the project is an architectural masterpiece and a st' +
                    'yle destination, presenting a one-of-a-kind brand name with multiple retailers, ' +
                    'designer boutiques and Hotel Residence Inn by Marriott. With its stylish accommo' +
                    'dations and unparalleled service, RIBM hotel is the perfect place to enjoy an ex' +
                    'tended stay offering the comforts of home plus the added benefits of a contempor' +
                    'ary hotel.',
            image: '/images/fg.png',
            location: ' DHA Phase 2, Islamabad, Pakistan',
            status: 'Under Construction'
        },
        'Imarat Builders Mall': {
            description: 'A one-stop-shop for all construction needs, the IMARAT Builders Mall is ideally ' +
                    'located on the main G.T. Road providing easy access to both residents and visito' +
                    'rs. IBM offers a wide range of well-designed, functional and luxurious construct' +
                    'ion & furnishing products, ensuring that your house meets new standards of livin' +
                    'g; a complete lifestyle solution to make your home truly your own.',
            image: '/images/ibm.png',
            location: 'GT Road, Islamabad, Pakistan',
            status: 'Completed'
        },
        'Amazon Outlet Mall': {
            description: 'Located on GT Road right next to the city’s most vibrant localities, the Amazon ' +
                    'Mall is the first outlet concept mall in Pakistan and a home to the most premium' +
                    ' fashion brands. Designed on a rainforest theme, the mall aims to be the ultimat' +
                    'e value retail destination where shoppers can avail extensive deals and discount' +
                    's on all the brands under one roof. From dining experience in rainforest-themed ' +
                    'restaurants to spending quality time shopping or doing self-care the Amazon mall' +
                    ' offers a wide array of activities for people of all ages & interests.',
            image: '/images/aom.png',
            location: 'GT Road, Islamabad, Pakistan',
            status: 'Completed'
        },
        'Bavylon': {
            description: 'Located on GT Road right next to the city’s most vibrant localities, the Amazon ' +
                    'Mall is the first outlet concept mall in Pakistan and a home to the most premium' +
                    ' fashion brands. Designed on a rainforest theme, the mall aims to be the ultimat' +
                    'e value retail destination where shoppers can avail extensive deals and discount' +
                    's on all the brands under one roof. From dining experience in rainforest-themed ' +
                    'restaurants to spending quality time shopping or doing self-care the Amazon mall' +
                    ' offers a wide array of activities for people of all ages & interests.',
            image: '/images/bavylon.png',
            location: 'DHA, Multan , Pakistan',
            status: 'Under Construction'
        },
        'Imarat Cyber Tower': {
            description: 'Cyber Tower has all the intensity in digital hardware and software, as well as t' +
                    'he present-day digital lifestyle diversity to validate this distinction. Our cut' +
                    'ting-edge facilities and advanced infrastructure make it the ideal breeding grou' +
                    'nd for tech innovation and growth. With a vibrant community of tech enthusiasts,' +
                    ' startups, and established industry leaders, we offer an unparalleled ecosystem ' +
                    'for collaboration, networking, and idea exchange.',
            image: '/images/cyber-center.png',
            location: 'Islamabad , Pakistan',
            status: 'Under Construction'
        },
        'Golf Floras': {
            description: 'Experience in detail the larger-than-life sensation of being in Golf Floras, the' +
                    ' first of their kind luxury condominiums in Pakistan, ranked amongst the top 20 ' +
                    'Luxury Resort Living projects in the world. The flagship project of IMARAT Group' +
                    ' overlooks the Golf Course and the Flora Hills in Bahria Garden City, providing ' +
                    'residents and visitors with an aesthetic blend of serene nature and modern luxur' +
                    'y.',
            image: '/images/gf.png',
            location: 'Bahria Garden City, Islamabad , Pakistan',
            status: 'Under Construction'
        },
        'Courtyard by Marriott': {
            description: 'Situated in the vibrant residential and commercial hub of the G-11 Markaz, Court' +
                    'yard by Marriott is a contemporary retreat for the modern business and leisure t' +
                    'raveler. The Four-Star International Hotel is the third-largest hotel in the Cap' +
                    'ital, as it houses 200 suites and offers visitors and residents a breathtaking v' +
                    'iew of the Margalla Hills. The Courtyard aims to continuously evolve to meet the' +
                    'ir guests needs, blending together smart technology with style and comfort.',
            image: '/images/g11.png',
            location: 'G-11 Markaz, Islamabad , Pakistan',
            status: 'Under Construction'
        },
        'Grand Bazaar': {
            description: 'Blending the classic with the contemporary, the Grand Bazar is a lively marketpl' +
                    'ace that offers the s residents and tourists an enthralling experience of shoppi' +
                    'ng, entertainment and dining. Walk through glittering Grand Bazaar and enjoy the' +
                    ' adventure of shopping in the setting of a traditional souk. It’s where you will' +
                    ' discover rich tapestries and carpets, intricate handicrafts, eclectic jewelry, ' +
                    'culturally-inspired fashion and perfumes, as well as furnishings, books, art and' +
                    ' more.',
            image: '/images/gb.png',
            location: 'Islamabad Expressway, Islamabad , Pakistan',
            status: 'Under Construction'
        },
        'Imarat Downtown': {
            description: 'Designed on the Live, Work, Shop & Play philosophy, the IMARAT Downtown offers a' +
                    'n outstanding array of retail, leisure, business and entertainment facilities fo' +
                    'r you to indulge your every desire. Providing the ultimate metropolitan lifestyl' +
                    'e abounding with world-class landmarks, entertainment and glamour, Islamabad Dow' +
                    'ntown is a true heart of Pakistan. The IMARAT Downtown is home to excellent busi' +
                    'ness, leisure and wellness facilities. With an internationally-acclaimed hotel c' +
                    'hain, a well-designed mall with high-end dining and retail options, a cutting-ed' +
                    'ge technology park, and state-of-the-art facilities in the IMARAT Executive Club' +
                    ', the IMARAT Downtown offers you endless exciting opportunities',
            image: '/images/imarat_downtown.png',
            location: 'Islamabad Expressway, Islamabad , Pakistan',
            status: 'Under Construction'
        },
        'Imarat Residences': {
            description: 'Placed centrally in the IMARAT Downtown on the Islamabad Expressway, IMARAT Resi' +
                    'dences is located in the literal heart of the Capital city – ten minutes from th' +
                    'e Zero point. To live in IMARAT Residences is to be a part of a dynamic communit' +
                    'y, with all the luxuries and amenities of the city’s new Downtown at your doorst' +
                    'ep. Designed with intent, IMARAT Residences caters to all the needs of the fast-' +
                    'paced contemporary lifestyle. This is the exclusive destination for the modern P' +
                    'akistani – an ambitious project that is the future of smart living.',
            image: '/images/ir.png',
            location: 'Islamabad Expressway, Islamabad , Pakistan',
            status: 'Under Construction'
        }
    };

    return (
        <div className="p-6 text-gray-800 pr-20 min-h-[200px] ">
            {selectedProject
                ? (
                    <div
                        className="bg-gray-100 items-center grid grid-flow-row justify-center px-20 pt-20 pb-5 rounded-lg shadow-md mb-4 ">
                        <h2 className="text-4xl mb-2">{selectedProject}</h2>
                        <div className="flex justify-center items-center">
                            <img
                                src={projectDetails[selectedProject].image}
                                alt={selectedProject}
                                className="mb-4 rounded-md h-full flex max-w-xl max-h-max"/></div>
                        <p className=" pl-5 pt-5 pr-5">{projectDetails[selectedProject].description}</p>
                        <p className="mt-4 p-5">
                            <strong>Location: </strong>
                            {projectDetails[selectedProject].location}</p>
                        <p className=" pl-5">
                            <strong>Status: </strong>
                            {projectDetails[selectedProject].status}</p>
                    </div>
                )
                : (
                    <div
                        className="bg-gray-100 items-center grid grid-flow-row justify-center px-20 pt-20 pb-5 rounded-lg shadow-md mb-4 ">
                        <h2 className="text-4xl mb-2">Imarat Residences</h2>
                        <div className="flex justify-center items-center">
                            <img
                                src='/images/ir.png'
                                alt='imarat_residences'
                                className="mb-4 rounded-md h-full flex "/></div>
                        <p className=" pl-5 pt-5 pr-5">Placed centrally in the IMARAT Downtown on the
                            Islamabad Expressway, IMARAT Residences is located in the literal heart of the
                            Capital city – ten minutes from the Zero point. To live in IMARAT Residences is
                            to be a part of a dynamic community, with all the luxuries and amenities of the
                            city’s new Downtown at your doorstep. Designed with intent, IMARAT Residences
                            caters to all the needs of the fast-paced contemporary lifestyle. This is the
                            exclusive destination for the modern Pakistani – an ambitious project that is
                            the future of smart living.</p>
                        <p className="mt-4 p-5">
                            <strong>Location: </strong>
                            Islamabad Expressway, Islamabad , Pakistan</p>
                        <p className=" pl-5">
                            <strong>Status: </strong>
                            Under Construction</p>
                    </div>
                )}
        </div>
    );
};

export default ProjectDetails;
