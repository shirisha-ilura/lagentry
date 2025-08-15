import React from 'react';
import { 
  Star, 
  CheckCircle, 
  Clock, 
  BarChart3, 
  Plus,
  Filter,
  Users
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface WorkflowItem {
  id: string;
  name: string;
  timestamp: string;
  status: 'ongoing' | 'completed' | 'in-review' | 'failed' | 'in-process';
  priority: 'minor' | 'moderate' | 'critical';
  result: 'success' | 'failed' | 'in-process';
}

const workflowData: WorkflowItem[] = [
  {
    id: 'TSK-8',
    name: 'Improve Navigation & Menu Organization',
    timestamp: 'Aug 7, 2025 – 12:40 PM',
    status: 'ongoing',
    priority: 'moderate',
    result: 'success'
  },
  {
    id: 'TSK-20',
    name: 'Enhance Search Functionality',
    timestamp: 'Aug 7, 2025 – 12:40 PM',
    status: 'completed',
    priority: 'critical',
    result: 'success'
  },
  {
    id: 'TSK-22',
    name: 'Dark Mode Implementation',
    timestamp: 'Aug 7, 2025 – 12:40 PM',
    status: 'in-review',
    priority: 'minor',
    result: 'failed'
  },
  {
    id: 'TSK-6',
    name: 'Optimize Mobile Responsiveness',
    timestamp: 'Aug 7, 2025 – 12:40 PM',
    status: 'ongoing',
    priority: 'moderate',
    result: 'in-process'
  }
];

const getStatusIcon = (status: WorkflowItem['status']) => {
  switch (status) {
    case 'ongoing':
      return <Star className="h-4 w-4 text-yellow-500" />;
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'in-review':
      return <Clock className="h-4 w-4 text-blue-500" />;
    default:
      return <Star className="h-4 w-4 text-yellow-500" />;
  }
};

const getPriorityIcon = (priority: WorkflowItem['priority']) => {
  const color = priority === 'critical' ? 'text-red-500' : 'text-gray-500';
  return <BarChart3 className={`h-4 w-4 ${color}`} />;
};

const getResultColor = (result: WorkflowItem['result']) => {
  switch (result) {
    case 'success':
      return 'text-green-500';
    case 'failed':
      return 'text-red-500';
    case 'in-process':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
};

export function WorkflowRuns() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="p-8 relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Workflow Runs
          </h1>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Status */}
          <div className="bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</span>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">In Progress</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className={`h-2 rounded-full ${resolvedTheme === 'dark' ? 'bg-purple-600' : 'bg-orange-500'}`} style={{ width: '51%' }}></div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">51%</span>
          </div>

          {/* Total Tasks */}
          <div className="bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tasks</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">15 / 48</span>
          </div>

          {/* Active Workflows */}
          <div className="bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Workflows</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">8</span>
          </div>

          {/* Success Rate */}
          <div className="bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Success rate</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">90%</span>
          </div>

          {/* Total Runs Today */}
          <div className="bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Runs today</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">20</span>
              <div className="flex -space-x-2">
                <div className={`w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ${resolvedTheme === 'dark' ? 'bg-purple-500' : 'bg-orange-500'}`}></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
                  +3
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mb-8">
          <button className={`text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
            resolvedTheme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-orange-500 hover:bg-orange-600'
          }`}>
            View All Workflows
          </button>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <Filter className="h-4 w-4" />
            <span>+ Filter</span>
          </button>
        </div>

        {/* Workflow Table */}
        <div className="bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80 dark:bg-transparent">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <input type="checkbox" className={`rounded border-gray-300 dark:border-gray-600 ${resolvedTheme === 'dark' ? 'checked:bg-purple-600' : 'checked:bg-orange-500'}`} />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Workflow Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Time Stamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/80 dark:bg-transparent divide-y divide-gray-200 dark:divide-gray-700">
                {workflowData.map((workflow, index) => (
                  <tr key={workflow.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-800/20">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input 
                        type="checkbox" 
                        className={`rounded border-gray-300 dark:border-gray-600 ${resolvedTheme === 'dark' ? 'checked:bg-purple-600' : 'checked:bg-orange-500'}`}
                        defaultChecked={index === 0}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {workflow.id} {workflow.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {workflow.timestamp}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(workflow.status)}
                        <span className="text-sm text-gray-900 dark:text-white capitalize">
                          {workflow.status.replace('-', ' ')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getPriorityIcon(workflow.priority)}
                        <span className="text-sm text-gray-900 dark:text-white capitalize">
                          {workflow.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium capitalize ${getResultColor(workflow.result)}`}>
                        {workflow.result.replace('-', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 