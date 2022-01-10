---
to: src/features/<%= role %>/<%= h.changeCase.camel(name) %>/container/index.tsx
---
function <%= h.changeCase.pascal(role) %><%= h.changeCase.pascal(name) %> () {
  return (
    <div>
      Hello to the <%= h.changeCase.pascal(role) %> <%= h.changeCase.pascal(name) %> feature container
    </div>
  );
};

export default <%= h.changeCase.pascal(role) %><%= h.changeCase.pascal(name) %>;