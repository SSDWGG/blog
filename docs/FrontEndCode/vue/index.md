# vue


## vue2
...

## vue3
v-if和v-for冲突的解决
- 在 vue 2.x 中，在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。
- 在 vue 3.x 中，v-if 总是优先于 v-for 生效。
结论：尽量避免在同一个元素上面同时使用v-if和v-for，建议使用计算属性替代

v-if和循环同时使用，第一性能消耗大，第二，v-else会自然的进入循环而造成bug


