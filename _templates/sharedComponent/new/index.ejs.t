---
to: src/shared/components/<%= h.changeCase.camel(name) %>/index.tsx
---
import React from 'react';

interface I<%= h.changeCase.pascal(name) %> {
  // add prop types
}

function <%= h.changeCase.pascal(name) %>(<%= h.changeCase.camel(name) %>Props: I<%= h.changeCase.pascal(name) %>) {
  return(
    <>
      <%= h.changeCase.pascal(name) %> Component
    </>
  );
};

export default <%= h.changeCase.pascal(name) %>;