import React, { MouseEventHandler } from 'react';

interface ProjectTagProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
  tag: string;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ onClick, isSelected, tag }) => {
  const buttonStyles = isSelected
    ? 'text-white bg-purple-500'
    : 'text-[#ADB7BE] border-slate-500 hover:border-white';

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer`}
      onClick={(e) => onClick(e)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
