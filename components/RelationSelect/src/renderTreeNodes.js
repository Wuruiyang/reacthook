import React from 'react';
import { get, isFunction } from 'lodash';
import Tree from '@ifchange-eui/tree';

const TreeNode = Tree.TreeNode;

const renderTreeNodes = data => {
    // console.log('0adfadfa=>>>>>', data, onChange);
    return (data || []).map(item => {
        let children = get(item, 'children', []);
        if (children.length) {
            return (
                <TreeNode title={item.name} key={item.id + ''}>
                    {renderTreeNodes(children)}
                </TreeNode>
            );
        }
        return <TreeNode title={item.name} {...item} key={item.id + ''} />;
    });
};

export default renderTreeNodes;
