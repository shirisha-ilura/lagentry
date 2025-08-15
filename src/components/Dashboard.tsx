import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { WorkflowRuns } from './WorkflowRuns';
import { Analytics } from './Analytics';

import { Embed } from './Embed';

type DashboardView = 'workflow-runs' | 'analytics' | 'embed';

interface DashboardProps {
  currentView?: DashboardView;
  onDashboardViewChange?: (view: DashboardView) => void;
}

export function Dashboard({ currentView = 'workflow-runs', onDashboardViewChange }: DashboardProps) {
  const renderContent = () => {
    switch (currentView) {
      case 'analytics':
        return <Analytics />;
      case 'embed':
        return <Embed />;
      case 'workflow-runs':
      default:
        return <WorkflowRuns />;
    }
  };

  return (
    <DashboardLayout>
      {renderContent()}
    </DashboardLayout>
  );
}