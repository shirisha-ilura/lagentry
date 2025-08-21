

import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

import { Star, MoreVertical } from 'lucide-react';
import { WorkflowConfigPanel } from './WorkflowConfigPanel';

const workflowCards = [
  {
    status: 'Active',
    statusColor: 'bg-yellow-100 text-yellow-700',
    star: false,
    title: 'Workflow Run - Gmail Agent',
    name: 'Gmail Agent',
    nextRun: 'Aug 15,2025',
    nextRunColor: 'text-yellow-300',
  },
  {
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    star: true,
    title: 'Workflow Run - Excel Agent',
    name: 'Excel Agent',
    nextRun: 'Completed',
    nextRunColor: 'text-green-400',
  },
  {
    status: 'Pending',
    statusColor: 'bg-pink-200 text-pink-700',
    star: false,
    title: 'Workflow Run - HR Agent',
    name: 'HR Agent',
    nextRun: 'Aug 11,2025',
    nextRunColor: 'text-red-400',
  },
  {
    status: 'Active',
    statusColor: 'bg-yellow-100 text-yellow-700',
    star: false,
    title: 'Workflow Run - Marketing Agent',
    name: 'Gmail Agent',
    nextRun: 'Aug 15,2025',
    nextRunColor: 'text-yellow-300',
  },
  // Additional agent boxes for 2nd row
  {
    status: 'Active',
    statusColor: 'bg-yellow-100 text-yellow-700',
    star: false,
    title: 'Workflow Run - Gmail Agent',
    name: 'Gmail Agent',
    nextRun: 'Aug 22,2025',
    nextRunColor: 'text-yellow-300',
  },
  {
    status: 'Pending',
    statusColor: 'bg-pink-200 text-pink-700',
    star: false,
    title: 'Workflow Run - HR Agent',
    name: 'HR Agent',
    nextRun: 'Aug 23,2025',
    nextRunColor: 'text-red-400',
  },
];

export function WorkflowRuns() {
  const [selectedAgentIdx, setSelectedAgentIdx] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const background = isDark
    ? 'radial-gradient(ellipse at 50% 0%, #4b206b 0%, #181028 60%, #0a0a0a 100%)'
    : '#f3f3f6'; // light black/gray for light mode
  return (
    <div
      className="w-full min-h-screen"
      style={{ background }}
    >
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-[#181028] to-[#22143a] py-4 flex justify-center items-center border-b border-[#232136] mb-8">
        <span className="text-white text-lg font-medium tracking-wide">Workflow Runs Automation</span>
      </div>
      <div className="flex flex-row gap-8 w-full items-start mt-8 min-h-[calc(100vh-100px)]">
        {/* Agent Cards 2x2 Grid Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowCards.map((card, idx) => {
              const isGmail = card.title === 'Workflow Run - Gmail Agent';
              const isExcel = card.title === 'Workflow Run - Excel Agent';
              const isHR = card.title === 'Workflow Run - HR Agent';
              const isMarketing = card.title === 'Workflow Run - Marketing Agent';
              return (
                <div
                  key={idx}
                  className={
                    isGmail || isExcel || isHR || isMarketing
                      ? "relative rounded-xl p-6 flex flex-col justify-between border border-[#a084e8] shadow-[0_0_12px_2px_rgba(160,132,232,0.15)] bg-gradient-to-br from-[#181028] to-[#22143a] cursor-pointer hover:scale-105 transition-transform"
                      : "relative bg-[#181028] border border-gray-700 rounded-xl p-6 min-w-[320px] min-h-[170px] shadow-lg flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform"
                  }
                  onClick={() => setSelectedAgentIdx(idx)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isGmail ? (
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-200 text-[#181028] shadow-sm">Active</span>
                      ) : isExcel ? (
                        <span className="text-xs font-semibold px-4 py-1 rounded-full bg-green-200 text-green-700 shadow-sm">Completed</span>
                      ) : isHR ? (
                        <span className="text-xs font-semibold px-4 py-1 rounded-full bg-pink-300 text-pink-800 shadow-sm">Pending</span>
                      ) : isMarketing ? (
                        <span className="text-xs font-semibold px-4 py-1 rounded-full bg-yellow-200 text-[#181028] shadow-sm">Active</span>
                      ) : (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${card.statusColor}`}>{card.status}</span>
                      )}
                      {/* Star symbols removed as requested */}
                    </div>
                    {isGmail || isExcel || isHR || isMarketing ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-vertical"><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/></svg>
                    ) : (
                      <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
                    )}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{card.title}</div>
                  <div className={isExcel ? "text-gray-400 text-lg font-semibold mb-1" : isGmail ? "text-gray-400 text-sm mb-1" : isHR ? "text-gray-400 text-lg font-semibold mb-1" : isMarketing ? "text-gray-400 text-lg font-semibold mb-1" : "text-sm text-gray-400 mb-2"}>Name- <span className={isExcel ? "font-semibold" : isHR ? "font-semibold" : isMarketing ? "font-semibold" : "text-white"}>{card.name}</span></div>
                  <div className={isExcel ? "text-gray-400 text-lg font-semibold" : isGmail ? "text-gray-400 text-sm" : isHR ? "text-gray-400 text-lg font-semibold" : isMarketing ? "text-gray-400 text-lg font-semibold" : "text-sm text-gray-400"}>
                    Next Run- <span className={isExcel ? "text-green-400 font-semibold" : isGmail ? "text-yellow-400 font-semibold" : isHR ? "text-red-600 font-semibold" : isMarketing ? "text-yellow-400 font-semibold" : `font-semibold ${card.nextRunColor}`}>{card.nextRun}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Workflow Configuration Panel (show only if agent selected) */}
        {selectedAgentIdx !== null && (
          <WorkflowConfigPanel
            agent={workflowCards[selectedAgentIdx]}
            onClose={() => setSelectedAgentIdx(null)}
          />
        )}
      </div>
    </div>
  );
}
