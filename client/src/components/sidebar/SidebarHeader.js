import React                    from 'react';
import { WButton, WRow, WCol }  from 'wt-frontend';

const SidebarHeader = (props) => {
    return (
        <WRow className='sidebar-header'>
            <WCol size="7">
                <WButton wType="texted" hoverAnimation="text-primary" className='sidebar-header-name'>
                    Todolists
                </WButton>
            </WCol>

            <WCol size="5">
                {
                    props.auth && <div className="sidebar-options">
                        <WButton className="sidebar-buttons" onClick={() => {if (Object.keys(props.activeList).length == 0) props.createNewList()}} clickAnimation="ripple-light" shape="rounded" color="primary">
                            <i className="material-icons" style={{backgroundColor: Object.keys(props.activeList).length == 0 ? "" : "rgb(97, 97, 97)"}}>add</i>
                        </WButton>
                    </div>
                }
            </WCol>

        </WRow>

    );
};

export default SidebarHeader;