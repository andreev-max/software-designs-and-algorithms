import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '900'),
    routes: [
      {
        path: '/docs/algorithms-and-data-structures-part-1/b-trees',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-1/b-trees', '499'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-1/binary_search_tree',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-1/binary_search_tree', '217'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-1/elementary_data_structures',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-1/elementary_data_structures', 'd01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-1/graphs',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-1/graphs', '82b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-1/hometask',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-1/hometask', '920'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-1/red-black_tree',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-1/red-black_tree', 'efa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-2/algorithms',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-2/algorithms', '227'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-2/divide_and_conquer',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-2/divide_and_conquer', '50b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-2/heap',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-2/heap', 'bdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-2/hometask',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-2/hometask', '42e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-2/insertion_sort',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-2/insertion_sort', 'f8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algorithms-and-data-structures-part-2/other_sorting_algorithms',
        component: ComponentCreator('/docs/algorithms-and-data-structures-part-2/other_sorting_algorithms', 'c7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/hometask',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/hometask', 'be4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/inheritance_in_details',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/inheritance_in_details', 'e42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/interface',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/interface', '8e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/object-oriented_design_introduction',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/object-oriented_design_introduction', '235'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/principles_of_oop',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/principles_of_oop', '54e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/programming_paradigm',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/programming_paradigm', '558'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-1/unified_modeling_language',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-1/unified_modeling_language', 'e81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-2/composition',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-2/composition', 'fef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-2/desing_by_contract',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-2/desing_by_contract', 'b7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-2/duck_typing',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-2/duck_typing', 'd53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-2/hometask',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-2/hometask', 'f20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-2/mixins',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-2/mixins', '1e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/building-blocks-of-oop-part-2/the_law_of_demeter',
        component: ComponentCreator('/docs/building-blocks-of-oop-part-2/the_law_of_demeter', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contents',
        component: ComponentCreator('/docs/contents', '023'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/behavioral_design_patterns',
        component: ComponentCreator('/docs/design-patterns/behavioral_design_patterns', '193'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/conclusion',
        component: ComponentCreator('/docs/design-patterns/conclusion', 'e2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/creational_design_patterns',
        component: ComponentCreator('/docs/design-patterns/creational_design_patterns', '67e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/design_patterns',
        component: ComponentCreator('/docs/design-patterns/design_patterns', '1df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/hometask',
        component: ComponentCreator('/docs/design-patterns/hometask', '688'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/design-patterns/structural_design_patterns',
        component: ComponentCreator('/docs/design-patterns/structural_design_patterns', '68a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/general_fp',
        component: ComponentCreator('/docs/functional-programming/general_fp', '4a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/hometask',
        component: ComponentCreator('/docs/functional-programming/hometask', '8c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/is_js_functional',
        component: ComponentCreator('/docs/functional-programming/is_js_functional', 'f70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/language_possibilities',
        component: ComponentCreator('/docs/functional-programming/language_possibilities', 'b19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/functional-programming/main_concepts',
        component: ComponentCreator('/docs/functional-programming/main_concepts', 'c62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/help',
        component: ComponentCreator('/docs/Introduction/help', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/importance-of-TypeScript-knowledge',
        component: ComponentCreator('/docs/Introduction/importance-of-TypeScript-knowledge', '554'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Introduction/intro',
        component: ComponentCreator('/docs/Introduction/intro', '744'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/solid-principles/anti_solid',
        component: ComponentCreator('/docs/solid-principles/anti_solid', 'd84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/solid-principles/conclusion',
        component: ComponentCreator('/docs/solid-principles/conclusion', 'c5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/solid-principles/hometask',
        component: ComponentCreator('/docs/solid-principles/hometask', 'ae3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/solid-principles/introduction',
        component: ComponentCreator('/docs/solid-principles/introduction', 'aa4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/solid-principles/solid',
        component: ComponentCreator('/docs/solid-principles/solid', '596'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
