import React, { useState, useEffect } 	from 'react';

import { WModal, WMHeader, WMMain, WButton } from 'wt-frontend';

const Delete = (props) => {

    const [isVisible, setVisible] = useState(true);

    const handleDelete = async () => {
        props.deleteList(props.activeid);
        props.setShowDelete(false);
    }


    return (
        <div className="delete-modal">
            <WModal visible={isVisible} >
                <WMHeader className="modal-header" color="rgb(255,250,250">
                    Delete List?
                </WMHeader>
                <WMMain>
                    <WButton className="modal-button cancel-button" onClick={() => props.setShowDelete(false)} wType="texted">
                        Cancel
                    </WButton>
                    <label className="col-spacer">&nbsp;</label>
                    <WButton className="modal-button" onClick={handleDelete} clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="danger">
                        Delete
                    </WButton>
                </WMMain>
            </WModal>
            {/* <div className="modal-header" onClose={() => props.setShowDelete(false)}>
                Delete List?
			</div>

            <div>
                <WButton className="modal-button cancel-button" onClick={() => props.setShowDelete(false)} wType="texted">
                    Cancel
				</WButton>
                <label className="col-spacer">&nbsp;</label>
                <WButton className="modal-button" onClick={handleDelete} clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="danger">
                    Delete
				</WButton>
            </div> */}

        </div>
    );
}

export default Delete;