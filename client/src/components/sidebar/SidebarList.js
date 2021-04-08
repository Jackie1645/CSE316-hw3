import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    let bot = props.todolists.filter((item) => item.id != props.activeid);
    let active = props.todolists.find((item) => item.id === props.activeid);
    active = active === undefined ? [] : [active];
    bot = active.concat(bot);
    return (
        <>
            {
                bot &&
                bot.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
                ))
            }
        </>
    );
};

export default SidebarList;