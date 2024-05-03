import { useEffect } from 'react';
import { projectTags, projectList } from '../assets/data.json';
import { useState } from 'react';
import { createReactIcon } from '../utils';

const Portfolio = () => {
  const [projectTagList, setProjectTagList] = useState([]);
  const [filterTag, setFilterTag] = useState('all');
  const [projcets, setProjects] = useState([]);

  useEffect(() => {
    const tagList = [{ id: 0, label: 'all', active: true }];
    projectTags.map((tag, idx) =>
      tagList.push({ id: idx + 1, label: tag, active: false })
    );
    setProjectTagList(tagList);
  }, []);

  useEffect(() => {
    setProjects(
      projectList
        .filter(
          (project) => project.tags.includes(filterTag) || filterTag === 'all'
        )
        .slice(0, 9)
    );
  }, [projectTagList]);

  const changeFilterTag = (id) => {
    setProjectTagList((prevTagList) =>
      prevTagList.map((tag) => ({ ...tag, active: tag.id === id }))
    );
    setFilterTag(projectTagList.filter((tag) => tag.id === id)[0].label);
  };

  return (
    <section className='portfolio' id='portfolio'>
      <div className='section-container'>
        <div className='section-subtitle'>Portfolio</div>
        <h2 className='section-title'>Creative Portfolio</h2>
        <p className='section-desc'>
          These projects reflect my personal endeavors, showcasing my dedication
          and creativity.
        </p>

        <div className='content-container'>
          <ul className='project-tag__list'>
            {projectTagList &&
              projectTagList.map((tag) => (
                <li
                  key={tag.id}
                  className={`project-tag__item ${
                    tag.active ? 'tag-active' : ''
                  }`}
                  onClick={() => {
                    changeFilterTag(tag.id);
                  }}
                >
                  {tag.label}
                </li>
              ))}
          </ul>
          {/* /tags-container */}

          <div className='project-container'>
            {projcets.map((project) => (
              <div
                className='project-item'
                key={project.id}
                title={project.name}
              >
                <div className='project-item__image'>
                  <img src={project.imageLink} alt={project.name} />
                </div>
                <ul className='project-item__link-list'>
                  {project.sourceCode && (
                    <li className='project-item__link-item' title='source code'>
                      <a
                        href={project.sourceCode}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {createReactIcon('GithubIcon')}
                      </a>
                    </li>
                  )}
                  {project.livePreview && (
                    <li
                      className='project-item__link-item'
                      title='live preview'
                    >
                      <a
                        href={project.livePreview}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {createReactIcon('GlobeIcon')}
                      </a>
                    </li>
                  )}
                </ul>
                <h4 className='project-item__title'> {project.name} </h4>
              </div>
            ))}
          </div>
          {/* /project-container */}
        </div>
        {/* /content-container */}
      </div>
      {/* /section-container */}
    </section>
  );
};

export default Portfolio;
