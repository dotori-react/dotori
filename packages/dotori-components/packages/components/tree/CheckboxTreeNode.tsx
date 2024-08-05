import { useEffect, useState } from 'react';

import { useDisClosure } from 'dotori-hooks';

import { Button } from '@/components';

import { type CheckboxTreeData } from './CheckboxTree';

const CheckboxTreeNode = ({ parentExpand, node, renderTreeNode, depth, idx, onClick }: CheckboxTreeNodeProps) => {
  const { isOpen: isExpanded, close, toggle } = useDisClosure();
  const [childrenExpanded, setChildrenExpand] = useState<boolean[]>(Array(node.children.length).fill(false));
  const [indeterminate, setIndeterminate] = useState(false);

  const handleCheckboxTreeNodeToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    expand();
  };

  const expand = () => {
    toggle();

    if (onClick) onClick(idx, !isExpanded);
  };

  const handleIndeterminate = (_idx: number, expanded: boolean) => {
    const newChildrenExpanded = childrenExpanded.map((ex, i) => (i === _idx ? expanded : ex));
    const isAllChecked = newChildrenExpanded.every(ex => ex);
    const isLeastChecked = newChildrenExpanded.some(ex => ex);

    setChildrenExpand(newChildrenExpanded);
    setIndeterminate(!isAllChecked && isLeastChecked);
  };

  const handleParentExpand = () => {
    const newChildrenExpanded = childrenExpanded.map((ex, i) => (i === idx ? !ex : ex));

    setChildrenExpand(newChildrenExpanded);
  };

  const nodes = node.children.map((child, index) => (
    <CheckboxTreeNode
      key={child.value}
      depth={depth + 1}
      idx={index}
      node={child}
      parentExpand={handleParentExpand}
      renderTreeNode={renderTreeNode}
      onClick={handleIndeterminate}
    />
  ));

  useEffect(() => {
    if (childrenExpanded.every(ex => !ex)) {
      close();
      if (parentExpand) parentExpand();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childrenExpanded, close]);

  return (
    <div>
      <Button className="cursor-pointer" variant="unstyle" onClick={handleCheckboxTreeNodeToggle}>
        {renderTreeNode({
          node,
          expand: {
            indeterminate,
            isExpanded,
            toggle: expand,
          },
          depth,
        })}
      </Button>
      <div className={isExpanded ? 'block' : 'hidden'}>{nodes}</div>
    </div>
  );
};

export interface CheckboxTreeNodeProps {
  node: CheckboxTreeData;
  depth: number;
  idx: number;
  parentExpand?: () => void;
  onClick?: (idx: number, isExpanded: boolean) => void;

  renderTreeNode: ({
    node,
    expand,
    depth,
  }: {
    node: CheckboxTreeData;
    expand: { indeterminate: boolean; isExpanded: boolean; toggle: () => void };
    depth: number;
  }) => React.ReactNode;
}

export default CheckboxTreeNode;
