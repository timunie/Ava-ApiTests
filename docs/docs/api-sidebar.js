// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  documentationSidebar: [
        {
          'type': 'category',
          'label': 'TestProject Namespace',
          'collapsed': true,
          'link': {type: 'doc', id: 'N_TestProject'},
          'items': [
            {
              'type': 'doc',
              'label': 'TestClass1 Class',
              'id': 'T_TestProject_TestClass1',
            }

          ]
        }
  ],
};

module.exports = sidebars;
