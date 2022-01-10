---
to: src/features/<%= role %>/<%= h.changeCase.camel(name) %>/components/<%= h.changeCase.camel(name) %>Component/index.tsx
---
import React from 'react';

function Component () {
  return (
    <div>
      Please change the component folder name <%= h.changeCase.camel(name) %>Component
    </div>
  );
};

export default Component;