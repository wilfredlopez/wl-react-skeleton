# wl-react-skeleton

React Skeleton

##### SkeletonElement

```tsx
import { SkeletonElement } from 'wl-react-skeleton';

// type SkeletonType = 'avatar' | 'text' | 'title' | 'thumbnail';

export function App() {
  return (
    <div>
      <SkeletonElement type="avatar" />
      <SkeletonElement type="text" />
    </div>
  );
}
```

#### THEME PROVIDER

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SkeletonThemeProvider } from 'wl-react-skeleton';

ReactDOM.render(
  <SkeletonThemeProvider>
    <App />
  </SkeletonThemeProvider>,
  document.getElementById('root')
);
```

```tsx
import React from 'react';
import { SkeletonElement, useSkeletonTheme } from 'wl-react-skeleton';

interface Props {}

export const SurveyDisplay = (props: Props) => {
  const { setTheme } = useSkeletonTheme();

  React.useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <div>
      <h1>Surveys</h1>
      <SkeletonElement type="avatar" size={150} />
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" maxWidth={300} />
      <SkeletonElement type="thumbnail" size={40} />
    </div>
  );
};
```
