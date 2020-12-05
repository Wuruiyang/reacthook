import React, { useState, useEffect } from 'react';
import Tooltip from '@ifchange-eui/tooltip';
import Iconfont from '@ifchange-eui/iconfont';

function CustomizeHeader(props) {
    return (
        <div>
            <Tooltip placement="bottom">
                <Iconfont className="setting-font-frozen" type="Settings" />
            </Tooltip>
        </div>
    );
}
export default CustomizeHeader;
