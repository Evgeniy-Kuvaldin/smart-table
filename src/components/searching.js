import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор   +++
    const searchRule = rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false);   //создаем кастомное правило
    const compare = createComparison(['skipEmptyTargetValues'],[searchRule]);                            //передаем в компаратор имя правила из rule и кастомное правило


    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор   +++
        return data.filter(row => compare(row, state));
    }
}