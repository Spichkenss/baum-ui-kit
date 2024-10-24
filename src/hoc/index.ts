/* Публичный API хоков
* Отсюда экспортируются HOCs, которые будут использоваться
* в разрабоке интерфейсов.
*
* !!! НЕ ЭКСПОРТИРОВАТЬ HOCs, КОТОРЫЕ НУЖНЫ ТОЛЬКО ДЛЯ РАЗРАБОТКИ UI-KIT'a !!!
*/

export { type WithPolymorphProps, withPolymorphism } from "./withPolymorphism";
export { type WithThemedStyleProps, withThemedStyle } from "./withThemedStyle";
export { type WithSlottableProps, slottable } from "./slottable";