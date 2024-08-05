import { useDisClosure } from 'dotori-hooks';

import { type TreeData } from './Tree';

const TreeNode = ({ node, renderTreeNode, depth }: TreeNodeProps) => {
  const { isOpen: isExpanded, toggle: expandToggle } = useDisClosure();

  const handleTreeNodeToggle = () => {
    expandToggle();
  };

  const nodes = node.children.map(child => (
    <TreeNode key={child.value} depth={depth + 1} node={child} renderTreeNode={renderTreeNode} />
  ));

  return (
    <div>
      <span className="inline-block cursor-pointer" onClick={handleTreeNodeToggle}>
        {renderTreeNode({ node, isChildren: node.children.length > 0, isExpanded, depth })}
      </span>
      <div className={isExpanded ? 'block' : 'hidden'}>{nodes}</div>
    </div>
  );
};

export interface TreeNodeProps {
  node: TreeData;
  depth: number;

  renderTreeNode: ({
    node,
    isChildren,
    isExpanded,
    depth,
  }: {
    node: TreeData;
    isChildren: boolean;
    isExpanded: boolean;
    depth: number;
  }) => React.ReactNode;
}

export default TreeNode;
