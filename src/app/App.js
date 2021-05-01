import React from 'react';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';

import { RouteWithLayout } from './utilities';
import * as Pages from './pages';
import * as Routes from './routes';
import * as Layouts from './layouts';

import './app.scss';

function App() {
  
  return (
    <div className="App">
      <Router basename=''>
        <Switch>
          <RouteWithLayout exact path={Routes.STORY_00} component={Pages.Story_00} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_01} component={Pages.Story_01} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_02} component={Pages.Story_02} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_03} component={Pages.Story_03} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_04} component={Pages.Story_04} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_05} component={Pages.Story_05} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_06} component={Pages.Story_06} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_07} component={Pages.Story_07} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_08} component={Pages.Story_08} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_09} component={Pages.Story_09} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_10} component={Pages.Story_10} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_11} component={Pages.Story_11} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_12} component={Pages.Story_12} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_13} component={Pages.Story_13} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_14} component={Pages.Story_14} layout={Layouts.StoryRiverLayout} />
          <RouteWithLayout exact path={Routes.STORY_15} component={Pages.Story_15} layout={Layouts.StoryHillsLayout} />
          <RouteWithLayout exact path={Routes.STORY_16} component={Pages.Story_16} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_17} component={Pages.Story_17} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_18} component={Pages.Story_18} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_19} component={Pages.Story_19} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_20} component={Pages.Story_20} layout={Layouts.StoryLightLayout} />
          
          <RouteWithLayout exact path={Routes.MENU} component={Pages.Menu} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.LOGIN} component={Pages.Login} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.REGISTER} component={Pages.Register} layout={Layouts.StoryLightLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
