import CheckboxTreeNode, { type CheckboxTreeNodeProps } from './CheckboxTreeNode';
import { type TreeData } from './Tree';

const CheckboxTree = ({ data, renderTreeNode }: CheckboxTreeProps) => (
  <div className="tw-preflight">
    {data.map((node, idx) => (
      <CheckboxTreeNode key={node.value} depth={0} idx={idx} node={node} renderTreeNode={renderTreeNode} />
    ))}
  </div>
);

interface CheckboxTreeProps extends Omit<CheckboxTreeNodeProps, 'node' | 'depth' | 'idx'> {
  data: CheckboxTreeData[];
}

export interface CheckboxTreeData extends TreeData {}

export default CheckboxTree;
