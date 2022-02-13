import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import ProjectFilterLabel from "../ProjectFilterLabel/ProjectFilterLabel";
import {DEFAULT_ANIMATION_DELAY, PROJECTS_MODE} from "../../../constants/settings";
import {useAnimationList} from "../../../utils/hooks";
import "./ProjectFilter.scss";

function ProjectFilter({techList, setFilteredValues}) {
    const [all, setAll] = useState(true);
    const [flags, setFlags] = useState(Array(techList.length).fill(false));

    const delays = Array(flags.length + 1).fill(0).map((value, index) => DEFAULT_ANIMATION_DELAY + 50 * (index + 1));
    const labelsInline = useAnimationList(PROJECTS_MODE, "label_rise", delays);

    useEffect(() => {
        if (all) {
            setFilteredValues(techList);
        } else {
            setFilteredValues(techList.filter((tech, index) => flags[index]));
        }
    }, [all, flags, setFilteredValues]);

    const allClickHandler = () => {
        setAll(true);
        setFlags(Array(techList.length).fill(false));
    }

    const techClickHandler = tech => {
        let nextFlags = flags.map((flag, index) => techList[index] === tech ? !flag : flag);
        const nextAll = !nextFlags.some(f => f) || nextFlags.every(f => f);
        if (nextAll) nextFlags = Array(techList.length).fill(false);
        setAll(nextAll);
        setFlags(nextFlags);
    }

    return (
        <ul className="project_filter">
            <ProjectFilterLabel
                tech="Все технологии"
                hasSelected={all}
                clickHandler={allClickHandler}
                labelInline={labelsInline[0]}
            />
            {techList.map((tech, index) =>
                <ProjectFilterLabel
                    key={tech}
                    tech={tech}
                    hasSelected={flags[index]}
                    clickHandler={() => techClickHandler(tech)}
                    labelInline={labelsInline[index + 1]}
                />
            )}
        </ul>
    );
}

ProjectFilter.propTypes = {
    techList: PropTypes.arrayOf(PropTypes.string),
    setFilteredValues: PropTypes.func
}

export default ProjectFilter;
