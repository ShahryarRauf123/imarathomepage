'use client'

import {useState} from 'react';

const ProjectButtons = ({onSelectProject}) => {
    const projects = [
        'Imarat Residences',
        'Mall of Imarat',
        'Florence Galleria',
        'Imarat Builders Mall',
        'Amazon Outlet Mall',
        'Bavylon',
        'Imarat Cyber Tower',
        'Golf Floras',
        'Courtyard by Marriott',
        'Grand Bazaar',
        'Imarat Downtown'
    ];

    return (
        <div className="flex text-sm space-x-2">
            {projects.map((project) => (
                <button
                    key={project}
                    className="px-3 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
                    onClick={() => onSelectProject(project)}>
                    {project}
                </button>
            ))}
        </div>
    );
};

export default ProjectButtons;
