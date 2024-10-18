import TreeNode, { type TreeNodeProps } from './TreeNode';

const Tree = ({ data, renderTreeNode }: TreeProps) => (
  <div className="tw-preflight">
    {data.map(node => (
      <TreeNode key={node.value} depth={0} node={node} renderTreeNode={renderTreeNode} />
    ))}
  </div>
);

interface TreeProps extends Omit<TreeNodeProps, 'node' | 'depth'> {
  data: TreeData[];
}

export interface TreeData {
  value: string;
  label: string;
  children: TreeData[];
}

export default Tree;
