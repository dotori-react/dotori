import { Entity } from '@dotori-components/components';

const JsonTreeView = ({ data, depth = 0 }: JsonTreeViewProps) => (
  <div>
    <Entity symbol="[" />
    {data.map((item, itemIndex) => (
      <div key={itemIndex} className="flex">
        {Array(3).map((_, i) => (
          <Entity key={i} symbol=" " />
        ))}
        <div>
          <Entity symbol="{" />
          {Object.entries(item).map(([key, value], keyValueIndex, keyValues) => (
            <div key={key}>
              <div className="flex gap-2">
                {Array(3).map((_, i) => (
                  <Entity key={i} symbol=" " />
                ))}
                <div>{key}</div>
                <Entity symbol=":" />
                <div>
                  {typeof value === 'object' && value !== null ? (
                    <JsonTreeView data={Array.isArray(value) ? value : Object.entries(value)} depth={depth + 1} />
                  ) : (
                    <>
                      {value === undefined ? 'undefined' : JSON.stringify(value)}
                      {keyValues.length > keyValueIndex + 1 && <Entity symbol="," />}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
          <Entity symbol="}" />
          {data.length > itemIndex + 1 && <Entity symbol="," />}
        </div>
      </div>
    ))}
    <Entity symbol="]" />
    {depth > 0 && data.length > depth + 1 && <Entity symbol="," />}
  </div>
);

interface JsonData {
  [depth: string]: string | number | boolean | object | null | undefined | JsonData[];
}

interface JsonTreeViewProps {
  data: JsonData[];
  depth?: number;
}

export default JsonTreeView;
