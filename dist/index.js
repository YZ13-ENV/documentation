(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime"), require("next/link.js"), require("react-icons/bi/index.esm.js"), require("react"), require("react-dom"), require("clsx"), require("tailwind-merge"), require("react-icons/md/index.esm.js"), require("react-syntax-highlighter"), require("react-syntax-highlighter/dist/esm/styles/hljs/index.js"), require("class-variance-authority")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime", "next/link.js", "react-icons/bi/index.esm.js", "react", "react-dom", "clsx", "tailwind-merge", "react-icons/md/index.esm.js", "react-syntax-highlighter", "react-syntax-highlighter/dist/esm/styles/hljs/index.js", "class-variance-authority"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.docs = {}, global["react/jsx-runtime"], global["next/link"], global["react-icons/bi"], global.React, global.ReactDOM, global.clsx, global["tailwind-merge"], global["react-icons/md"], global["react-syntax-highlighter"], global["react-syntax-highlighter/dist/esm/styles/hljs"], global["class-variance-authority"]));
})(this, function(exports2, jsxRuntime, Link, index_esm_js, React, reactDom, clsx, tailwindMerge, index_esm_js$1, SyntaxHighlighter, index_js, classVarianceAuthority) {
  "use strict";"use client";

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e) {
      for (const k in e) {
        if (k !== "default") {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
  const globals = "";
  const docs = (path) => `/docs/${path}`;
  const parseDocId = (path) => {
    const joined = path.join("/");
    return {
      root: path[0],
      sideValue: joined
    };
  };
  const SideElement = ({ element }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `w-full h-8 group flex items-center gap-2 ${element.hasArrow ? "justify-between" : "justify-start"}`, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Link, { href: docs(element.id), className: "text-sm text-muted-foreground hover:text-accent-foreground cursor-pointer select-none normal-case", children: element.name }),
      element.hasArrow && /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiChevronRight, { size: 18, className: "text-muted-foreground group-hover:text-accent-foreground" })
    ] });
  };
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === "function")
      ref(value);
    else if (ref !== null && ref !== void 0)
      ref.current = value;
  }
  function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node) => refs.forEach(
      (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
    );
  }
  const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1)
            return React.Children.only(null);
          return /* @__PURE__ */ React.isValidElement(newElement) ? newElement.props.children : null;
        } else
          return child;
      });
      return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
        ref: forwardedRef
      }), /* @__PURE__ */ React.isValidElement(newElement) ? /* @__PURE__ */ React.cloneElement(newElement, void 0, newChildren) : null);
    }
    return /* @__PURE__ */ React.createElement($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), children);
  });
  $5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
  const $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (/* @__PURE__ */ React.isValidElement(children))
      return /* @__PURE__ */ React.cloneElement(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
      });
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  $5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
  const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  };
  function $5e63c961fc1ce211$var$isSlottable(child) {
    return /* @__PURE__ */ React.isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
  }
  function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    const overrideProps = {
      ...childProps
    };
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue)
          overrideProps[propName] = (...args) => {
            childPropValue(...args);
            slotPropValue(...args);
          };
        else if (slotPropValue)
          overrideProps[propName] = slotPropValue;
      } else if (propName === "style")
        overrideProps[propName] = {
          ...slotPropValue,
          ...childPropValue
        };
      else if (propName === "className")
        overrideProps[propName] = [
          slotPropValue,
          childPropValue
        ].filter(Boolean).join(" ");
    }
    return {
      ...slotProps,
      ...overrideProps
    };
  }
  const $8927f6f2acc4f386$var$NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ];
  const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
    const Node = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
      const { asChild, ...primitiveProps } = props;
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
      React.useEffect(() => {
        window[Symbol.for("radix-ui")] = true;
      }, []);
      return /* @__PURE__ */ React.createElement(Comp, _extends({}, primitiveProps, {
        ref: forwardedRef
      }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
      ...primitive,
      [node]: Node
    };
  }, {});
  const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
  const $89eedd556c436f6a$var$ORIENTATIONS = [
    "horizontal",
    "vertical"
  ];
  const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
      role: "none"
    } : {
      "aria-orientation": ariaOrientation,
      role: "separator"
    };
    return /* @__PURE__ */ React.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-orientation": orientation
    }, semanticProps, domProps, {
      ref: forwardedRef
    }));
  });
  $89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
    orientation(props, propName, componentName) {
      const propValue = props[propName];
      const strVal = String(propValue);
      if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
        return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
      return null;
    }
  };
  function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
    return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
  }
  function $89eedd556c436f6a$var$isValidOrientation(orientation) {
    return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
  }
  const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;
  function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
  }
  const Separator = React__namespace.forwardRef(
    ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
      $89eedd556c436f6a$export$be92b6f5f03c0fe9,
      {
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        ),
        ...props
      }
    )
  );
  Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
  const SideGroup = ({ group, providedId }) => {
    const isInGroupItems = providedId ? group.items.findIndex((item) => item.id === providedId) > -1 : false;
    const isIncluded = isInGroupItems;
    const [open, setOpen] = React.useState(isIncluded || false);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Link, { href: docs(group.id), className: "text-sm text-muted-foreground hover:text-accent-foreground cursor-pointer select-none normal-case", children: group.name }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index_esm_js.BiChevronRight,
          {
            onClick: () => setOpen(!open),
            size: 20,
            className: `text-muted-foreground ${open ? "rotate-90" : ""} hover:text-accent-foreground cursor-pointer transition-transform`
          }
        )
      ] }),
      open && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit flex flex-col relative gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-0 w-4 h-full", children: /* @__PURE__ */ jsxRuntime.jsx(Separator, { orientation: "vertical", className: "mx-auto" }) }),
        group.items.map(
          (item) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "cursor-pointer w-full h-fit pl-2 flex items-center justify-start gap-4 group", children: [
            /* @__PURE__ */ jsxRuntime.jsx(Separator, { orientation: "vertical", className: "z-10 h-6 transition-colors group-hover:bg-accent-foreground" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              Link,
              {
                href: docs(item.id),
                className: "text-sm text-muted-foreground select-none transition-colors group-hover:text-accent-foreground",
                children: item.name
              }
            ),
            item.hasArrow && /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiChevronRight, { size: 18, className: "ml-auto text-muted-foreground transition-colors group-hover:text-accent-foreground" })
          ] }, item.id + "-group-item")
        )
      ] })
    ] });
  };
  const fundamentals = [
    {
      type: "group",
      name: "Начало работы",
      id: "fundamentals",
      items: [
        {
          type: "single",
          id: "fundamentals/create-account",
          name: "Создайте аккаунт",
          hasArrow: true
        }
      ]
    },
    {
      type: "group",
      name: "Проекты",
      id: "fundamentals/projects",
      items: [
        {
          type: "single",
          id: "fundamentals/projects/dm",
          name: "DM",
          hasArrow: true
        },
        {
          type: "single",
          id: "fundamentals/projects/yz13",
          name: "YZ13",
          hasArrow: true
        },
        {
          type: "single",
          id: "fundamentals/projects/keeper",
          name: "Keeper",
          hasArrow: true
        },
        {
          type: "single",
          id: "fundamentals/projects/frame",
          name: "Frame (скоро)",
          hasArrow: true
        },
        {
          type: "single",
          id: "fundamentals/projects/calendar",
          name: "Calendar (скоро)",
          hasArrow: true
        }
      ]
    }
  ];
  const fundamental_map = {
    id: "fundamentals",
    root: true,
    name: "Основы",
    side: fundamentals
  };
  const fundamental_projects_map = {
    id: "fundamentals/projects",
    name: "Проекты",
    side: fundamentals
  };
  const fundamental_projects_dm_map = {
    id: "fundamentals/projects/dm",
    name: "DM",
    side: fundamentals
  };
  const fundamental_projects_yz13_map = {
    id: "fundamentals/projects/yz13",
    name: "YZ13",
    side: fundamentals
  };
  const api = [
    {
      type: "group",
      id: "api/rest-api",
      name: "DM REST API",
      items: [
        {
          type: "single",
          id: "api/rest-api/endpoints",
          name: "Endpoints"
        }
      ]
    }
  ];
  const api_map = {
    id: "api/rest-api",
    root: true,
    name: "API",
    side: api
  };
  const api_rest_api_endpoints_map = {
    id: "api/rest-api/endpoints",
    name: "REST API Endpoints",
    side: api
  };
  const maps = [
    fundamental_map,
    fundamental_projects_map,
    fundamental_projects_dm_map,
    fundamental_projects_yz13_map,
    api_map,
    api_rest_api_endpoints_map
  ];
  const DocsNav = () => {
    const navLinks = maps.map((map) => {
      if (map.root) {
        return {
          name: map.name,
          link: docs(map.id)
        };
      } else
        return null;
    }).filter((map) => map ? true : false);
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-full h-fit border-b", children: /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "max-w-7xl w-full mx-auto h-full flex items-center gap-4 px-6 py-2", children: navLinks.map(
      (item) => /* @__PURE__ */ jsxRuntime.jsx(Link, { href: item.link, className: "text-sm text-muted-foreground hover:text-accent-foreground", children: item.name }, "nav-" + item.link)
    ) }) });
  };
  const docFinder = (docId) => {
    const map = maps.find((map2) => map2.id === docId);
    if (map)
      return map;
    return null;
  };
  const Side = ({ docId }) => {
    const parsedDocId = parseDocId(docId);
    const documentation = docFinder(parsedDocId.sideValue);
    return /* @__PURE__ */ jsxRuntime.jsx("aside", { className: "px-6 shrink-0 w-64 h-full gap-4 flex flex-col", children: documentation && documentation.side.map((item, index) => {
      if (item.type === "group")
        return /* @__PURE__ */ jsxRuntime.jsx(SideGroup, { providedId: parsedDocId.sideValue, group: item }, "group-" + index);
      if (item.type === "single")
        return /* @__PURE__ */ jsxRuntime.jsx(SideElement, { element: item }, "single-" + index);
      return null;
    }) });
  };
  const buttonVariants = classVarianceAuthority.cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  const Button = React__namespace.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
      return /* @__PURE__ */ jsxRuntime.jsx(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props
        }
      );
    }
  );
  Button.displayName = "Button";
  const CodeBlock = ({ children, filename, showLineNumber = false, language = "typescript" }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full h-fit flex flex-col rounded-xl border", children: [
      filename && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full px-3 border-b rounded-t-xl h-12 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-fit flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx(index_esm_js.BiFileBlank, { className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-muted-foreground", children: filename })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Button, { disabled: true, variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntime.jsx(index_esm_js$1.MdContentCopy, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: `p-3 bg-card ${filename ? "rounded-b-xl" : "rounded-xl"}`, children: /* @__PURE__ */ jsxRuntime.jsx(
        SyntaxHighlighter,
        {
          language,
          style: index_js.monokaiSublime,
          showLineNumbers: showLineNumber,
          customStyle: { background: "transparent !important", fontSize: ".85rem", lineHeight: "1.25rem" },
          children
        }
      ) })
    ] });
  };
  exports2.Code = CodeBlock;
  exports2.DocsNav = DocsNav;
  exports2.Side = Side;
  exports2.SideElement = SideElement;
  exports2.SideGroup = SideGroup;
  exports2.maps = maps;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
