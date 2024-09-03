// import React from 'react';
// import {
//     ReactFlow,
//     Background,
//     Controls,
//     Handle,
//     Position,
//     MarkerType,
//     Node,
//     Edge,
// } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';

// interface CompanyNodeData {
//     id: string
//     position: { x: number; y: number };
//     data: {
//         label: string;
//         country: string;
//         flag: string;
//         newActivity?: boolean;
//     }
// }

// const CompanyNode: React.FC<{ node: CompanyNodeData }> = ({ node }) => {
//     const data = node.data
//     return (
//         <div className="bg-white rounded-lg shadow-md p-4 w-64">
//             <div className="text-lg font-bold mb-2">{data.label}</div>
//             <div className="flex items-center space-x-2">
//                 <img src={data.flag} alt={data.country} className="w-5 h-5" />
//                 <span className="text-sm text-gray-600">{data.country}</span>
//             </div>
//             {data.newActivity && (
//                 <div className="mt-2 inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
//                     New activity
//                 </div>
//             )}
//             <Handle type="target" position={Position.Top} />
//             <Handle type="source" position={Position.Bottom} />
//         </div>
//     );
// }

// const nodeTypes = {
//     company: CompanyNode,
// };

// const CompanyStructureDiagram: React.FC = () => {
//     const nodes: CompanyNodeData[] = [
//         { id: '1', position: { x: 250, y: 0 }, data: { label: 'Acme Inc', country: 'United Kingdom', flag: 'https://flagcdn.com/w20/gb.png' } },
//         { id: '2', position: { x: 50, y: 150 }, data: { label: 'Acme Industries', country: 'Spain', flag: 'https://flagcdn.com/w20/es.png', newActivity: true } },
//         { id: '3', position: { x: 450, y: 150 }, data: { label: 'Acme US L', country: 'United States', flag: 'https://flagcdn.com/w20/us.png' } },
//     ];

//     const edges: Edge[] = [
//         { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
//         { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
//     ];

//     return (
//         <div className='h-full'>
//             <ReactFlow
//                 nodes={nodes}
//                 // edges={edges}
//                 // nodeTypes={nodeTypes}
//                 fitView
//                 minZoom={1}
//                 maxZoom={2}
//             // defaultViewport={{ x: 0, y: 0, zoom: 1 }}
//             >
//                 <Background color="#f0f0f0" />
//                 <Controls />
//             </ReactFlow>
//         </div>
//     );
// };

// export default CompanyStructureDiagram;

import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CompanyNodeProps {
    name: string;
    country: string;
    flag: string;
    isNew?: boolean;
    isDashed?: boolean;
}

const CompanyNode = ({ name, country, flag, isNew = false, isDashed = false }: CompanyNodeProps) => (
    <Card className={`w-80 p-4  ${isDashed ? 'border-2 border-dashed border-gray-200' : 'shadow-md'} `}>
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-base font-semibold text-gray-900">{name}</h3>
            {isNew && (
                <Badge variant="outline" className="py-1 bg-orange-50 text-orange-700 border-orange-200">
                    New activity
                </Badge>
            )}
        </div>
        <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-md p-2 shadow-sm">
            <span className="text-2xl">{flag}</span>
            <span className="text-sm font-medium text-gray-700">{country}</span>
        </div>
    </Card>
);

const CompanyStructureDiagram = () => {
    return (
        <div className="overflow-hidden h-full">
            <div className="relative">
                {/* Parent Company */}
                <div className="absolute">
                    <div className=" flex justify-center mb-16">
                        <CompanyNode name="Acme Inc" country="United Kingdom" flag="🇬🇧" />
                    </div>

                    {/* Connector Lines */}
                    {/* <div className="absolute top-28 left-1/2 w-px h-20 bg-gray-300"></div> */}
                    {/* <div className="absolute top-48 left-1/4 w-1/2 h-px bg-gray-300"></div> */}
                    {/* <div className="absolute top-48 left-1/4 w-px h-16 bg-gray-300"></div> */}
                    {/* <div className="absolute top-48 right-1/4 w-px h-16 bg-gray-300"></div> */}

                    {/* Subsidiaries */}
                    <div className="flex justify-between pt-6 gap-12">
                        <CompanyNode name="Acme Industries" country="Spain" flag="🇪🇸" isNew={true} />
                        <CompanyNode name="Acme US Limited" country="United States" flag="🇺🇸" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyStructureDiagram;