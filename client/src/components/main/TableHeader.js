import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" >Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted">Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Status</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Owner</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    <WButton className="undo-redo" onClick={props.undo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                        <i className="material-icons" style={{color: props.canUndo() ? "" : "rgb(97, 97, 97)"}}>undo</i>
                    </WButton>
                    <WButton className="undo-redo" onClick={props.redo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                        <i className="material-icons" style={{color: props.canRedo() ? "" : "rgb(97, 97, 97)"}}>redo</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => {props.clear(); props.setActiveList({})}} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;