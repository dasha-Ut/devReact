import { IntroSection } from './0-Intro/IntroSection';
import { HooksBasicsSection } from './1-HooksBasics/HooksBasicsSection';
//import { MoreCustomHooksSection } from '10-MoreCustomHooks/MoreCustomHooksSection';
//import { React19Section } from '11-React19/React19Section';
import { SideEffectsSection } from './2-SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from './3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from './4-Memoization/MemoizationSection';
import { ComponentsLifecycleSection } from './5-ComponentsLifecycle/ComponentsLifecycleSection';
import { ContextAndReducerSection } from './6-ContextAndReducer/ContextAndReducerSection';
import { StateManagementSection } from './7-StateManagement/StateManagementSection';
import { DataFecthingSection } from '8-DataFetching/DataFetchingSection';
// import { DesignPatternsSection } from '9-DesignPatters/DesignPatternsSection';
import { MasterDetail } from './components/MasterDetail/MasterDetail';

export function App() {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
      <MemoizationSection />
      <StateManagementSection />
      <ComponentsLifecycleSection />
      <ContextAndReducerSection />
      <DataFecthingSection />
      {/*    <DesignPatternsSection />
            <MoreCustomHooksSection />
            <React19Section /> */}
    </MasterDetail>
  );
}