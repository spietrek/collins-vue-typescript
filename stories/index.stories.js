import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import HelloWorld from '../src/components/HelloWorld.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Hello', module)
  .add('Hello World (without JSX)', () => ({
    components: { HelloWorld },
    template: '<HelloWorld msg="Welcome to a Vue.js + TypeScript App" />',
  }))
  .add('Hello World (with JSX)', () => ({
    components: { HelloWorld },
    render(h) {
      return (
        <HelloWorld msg="Welcome to a Vue.js + TypeScript App (using JSX)" />
      );
    },
  }));
