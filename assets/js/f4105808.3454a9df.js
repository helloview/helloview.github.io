"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[570],{3056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>C,contentTitle:()=>I,default:()=>A,frontMatter:()=>q,metadata:()=>V,toc:()=>D});var n=r(1527),a=r(7214),s=r(959),u=r(5341),i=r(3583),l=r(8903),o=r(7049),c=r(1918),d=r(5560),h=r(4349);function m(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=p(e),[u,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,c]=x({queryString:r,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,h.Nk)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=l??d;return f({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,a]),tabValues:a}}var v=r(3948);const j={tabList:"tabList_H21L",tabItem:"tabItem_Cspl"};function y(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),n=l[r].value;n!==a&&(c(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...s,className:(0,u.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,n.jsxs)("div",{className:(0,u.Z)("tabs-container",j.tabList),children:[(0,n.jsx)(y,{...e,...t}),(0,n.jsx)(g,{...e,...t})]})}function S(e){const t=(0,v.Z)();return(0,n.jsx)(w,{...e,children:m(e.children)},String(t))}const k={tabItem:"tabItem_jXxc"};function T(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,u.Z)(k.tabItem,a),hidden:r,children:t})}const q={id:"data-structure-array",title:"Array | Data Structure",sidebar_label:"Array",description:"data structure array",keywords:["data structure","array"],tags:["array","data structure"],last_update:{date:new Date("2023-11-17T00:00:00.000Z"),author:"Yuxuan Jiang"}},I=void 0,V={id:"data_structure/data-structure-array",title:"Array | Data Structure",description:"data structure array",source:"@site/docs/data_structure/array.mdx",sourceDirName:"data_structure",slug:"/data_structure/data-structure-array",permalink:"/docs/data_structure/data-structure-array",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data_structure/array.mdx",tags:[{label:"array",permalink:"/docs/tags/array"},{label:"data structure",permalink:"/docs/tags/data-structure"}],version:"current",lastUpdatedBy:"Yuxuan Jiang",lastUpdatedAt:1700179200,formattedLastUpdatedAt:"Nov 17, 2023",frontMatter:{id:"data-structure-array",title:"Array | Data Structure",sidebar_label:"Array",description:"data structure array",keywords:["data structure","array"],tags:["array","data structure"],last_update:{date:"2023-11-17T00:00:00.000Z",author:"Yuxuan Jiang"}}},C={},D=[{value:"Leetcode Questions",id:"leetcode-questions",level:2}];function N(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"leetcode-questions",children:"Leetcode Questions"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"1. Two Sum [easy]"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/two-sum/",children:"1. Two Sum"})}),(0,n.jsx)(t.p,{children:"The strategy to solve this problem:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Iterate through the Array"}),": Loop through each element in the array."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Check for the Complement"}),": For every element, check if the complement (target - current element) exists in the hash table."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Store Elements in a Hash Table"}),": If the complement is not found, store the current element's value and its index in the hash table."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Return Indices"}),": If a complement is found, return the indices of the current element and its complement."]}),"\n"]}),(0,n.jsx)(S,{defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"}],children:(0,n.jsx)(T,{value:"javascript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"// Time Complexity: O(n)\n// Space Complexity: O(n)\nvar twoSum = function(nums, target) {\n    const map = new Map();\n\n    // iterate through the array\n    for(let i=0; i<nums.length ;i++){\n        // check for the complement\n        let complement = target - nums[i];\n\n        if(map.has(complement)){\n            // return indices\n            return [map.get(complement), i];\n        }\n\n        // store elements in a hash table if complement is not found\n        map.set(nums[i], i);\n    }\n};\n"})})})})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"26. Remove Duplicates from Sorted Array [easy]"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",children:"26. Remove Duplicates from Sorted Array"})}),(0,n.jsx)(t.p,{children:"The strategy to solve this problem:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Two Pointers"}),": Use two pointers, where one (i) iterates through the array, and the other (j) keeps track of the position of the next unique element."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Iterate and Compare"}),": As you iterate through the array, compare adjacent elements. If they are different, it means you've found a new unique element. Move this unique element to the position next to the last found unique element (j index)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Update the Second Pointer"}),": Each time a new unique element is found, increment the j pointer."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Return Length"}),": The length of the array without duplicates is the final value of the j pointer plus 1 (as array indices are zero-based)."]}),"\n"]}),(0,n.jsx)(S,{defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"}],children:(0,n.jsx)(T,{value:"javascript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"// Time Complexity: O(n)\n// Space Complexity: O(1)\n\nvar removeDuplicates = function(nums) {\n    if(nums.length === 0) return 0;\n\n    // use two pointers\n    let unique = 0; // unique is used to check unique numbers\n    for(let i=1; i<nums.length; i++){ // i is used to traverse the array\n        // if unique number is found, increase pointer unique\n        if(nums[unique] !== nums[i]){\n            unique++;\n            nums[unique] = nums[i];\n        }\n    }\n\n    return unique + 1;\n};\n"})})})})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"1913. Maximum Product Difference Between Two Pairs [easy]"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/maximum-product-difference-between-two-pairs",children:"1913. Maximum Product Difference Between Two Pairs"})}),(0,n.jsx)(t.p,{children:"The strategy to solve this problem:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Sort the Array"}),": Sort the array in non-decreasing order."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Find the Maximum Product"}),": The maximum product is given by the product of the last two elements (the two largest elements)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Find the Minimum Product"}),": Similarly, the minimum product is given by the product of the first two elements (the two smallest elements).\nCalculate the Difference: Subtract the minimum product from the maximum product."]}),"\n"]}),(0,n.jsxs)(S,{defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Java",value:"java"}],children:[(0,n.jsx)(T,{value:"javascript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"// Time Complexity: O(n log n)\n// Space Complexity: O(1)\n\nvar maxProductDifference = function(nums) {\n    // sort the array from smallest to largest\n    nums.sort((a, b) => a - b);\n\n    // get the length of array\n    const len = nums.length;\n\n    // calculate the pair product\n    return (nums[len -1] * nums[len-2]) - (nums[0] * nums[1]);\n};\n"})})}),(0,n.jsx)(T,{value:"java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"class Solution {\n    public int maxProductDifference(int[] nums) {\n        // sort the array using Arrays.sort() function\n        Arrays.sort(nums);\n\n        // get the length of array\n        int len = nums.length;\n\n        // calculate the product of pairs\n        int minProduct = nums[0] * nums[1];\n        int maxProduct = nums[len - 1] * nums[len - 2];\n        return maxProduct - minProduct;\n    }\n}\n"})})})]})]})]})]})}function A(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}},7214:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>u});var n=r(959);const a={},s=n.createContext(a);function u(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);