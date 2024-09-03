import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from './ui/badge';

interface Employee {
    name: string;
    title: string;
    country: string;
    flag: string;
    verified?: boolean;
}

interface ArrowPath {
    start: { x: number; y: number };
    end: { x: number; y: number };
    controlPoint: { x: number; y: number };
}

interface OrganizationChartProps {
    employees: Employee[];
    arrowPaths: ArrowPath[];
    xlsxIconPosition?: { x: number; y: number };
    cardDimensions?: { width: number; height: number };
    cardSpacing?: { horizontal: number; vertical: number };
}

export default function OrganizationChart({
    employees,
    arrowPaths,
    xlsxIconPosition = { x: 5, y: 100 },
    cardDimensions = { width: 200, height: 100 },
    cardSpacing = { horizontal: 240, vertical: 120 }
}: OrganizationChartProps) {
    return (
        <div className="relative w-[800px] h-[400px]">
            {/* XLSX Icon */}
            <div
                className="absolute w-[60px] h-[80px] bg-[#1d6f42] flex items-center justify-center text-white font-bold text-xl rounded-sm"
                style={{ left: `${xlsxIconPosition.x}px`, top: `${xlsxIconPosition.y}px` }}
            >
                XLSX
            </div>

            {/* Employee Cards */}
            {employees.map((employee, index) => (
                <Card
                    key={index}
                    className={`absolute  ${employee.verified ? 'bg-[#f3f0ff] border-[#d8ccff]' : ''}`}
                    style={{
                        width: `${cardDimensions.width}px`,
                        height: `${cardDimensions.height}px`,
                        left: `${130 + (index > 2 ? cardSpacing.horizontal : 0)}px`,
                        top: `${20 + (index % 3) * cardSpacing.vertical}px`
                    }}
                >
                    <CardHeader className="p-4 pb-0">
                        <CardTitle className="text-base font-semibold">{employee.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{employee.title}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <Badge variant="outline">{employee.flag}{employee.country}</Badge>
                        {employee.verified && (
                            <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}

            {/* SVG for arrows */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                {/* Dashed arrows from XLSX to first three cards */}
                <path d={`M ${xlsxIconPosition.x + 60} ${xlsxIconPosition.y + 40} Q ${xlsxIconPosition.x + 60} ${xlsxIconPosition.y + 40} 170 80`} fill="none" stroke="#1d6f42" strokeWidth="2" strokeDasharray="5,5" />
                <path d={`M ${xlsxIconPosition.x + 60} ${xlsxIconPosition.y + 40} Q ${xlsxIconPosition.x + 60} ${xlsxIconPosition.y + 40} 170 180`} fill="none" stroke="#1d6f42" strokeWidth="2" strokeDasharray="5,5" />
                <path d={`M ${xlsxIconPosition.x + 60} ${xlsxIconPosition.y + 40} Q ${xlsxIconPosition.x + 60} ${xlsxIconPosition.y + 40} 170 280`} fill="none" stroke="#1d6f42" strokeWidth="2" strokeDasharray="5,5" />

                {/* Custom arrow paths */}
                {/* {arrowPaths.map((path, index) => (
                    <path
                        key={index}
                        d={`M ${path.start.x} ${path.start.y} Q ${path.controlPoint.x} ${path.controlPoint.y} ${path.end.x} ${path.end.y}`}
                        fill="none"
                        stroke="#e0e0e0"
                        strokeWidth="2"
                    />
                ))} */}
            </svg>
        </div>
    );
}