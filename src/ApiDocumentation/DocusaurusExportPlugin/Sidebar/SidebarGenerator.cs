using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace DocusaurusExportPlugin.Sidebar
{
    /// <summary>
    /// Docusaurus-Sidebar-Generator
    /// </summary>
    public class SidebarGenerator
    {
        /// <summary>
        /// Gets a list of all Sidebar-Secions
        /// </summary>
        public List<SidebarSection> Items { get; } = new List<SidebarSection>();
        
        private SidebarSection? _currentParent;

        private SidebarSection? GetParentCategory(int level)
        {
            if (level <= 1)
            {
                return null;
            }
            else if (level > _currentParent?.Level)
            {
                return _currentParent;
            }
            else
            {
                while (_currentParent != null &&  _currentParent?.Level > level - 1)
                {
                    _currentParent = _currentParent.Parent;
                }
                return _currentParent;
            }
        }
    
        /// <summary>
        /// Adds a new item to the sidebar
        /// </summary>
        /// <param name="id">the id of the section</param>
        /// <param name="path">the path to link</param>
        /// <param name="label">the label to display</param>
        /// <param name="level">the level of the item</param>
        public void AddItem(string id, string path, string label, int level)
        {
            var type = id.Split(':').FirstOrDefault();
            
            var parent = GetParentCategory(level);
            
            var section = new SidebarSection(parent)
            {
                Level = level,
                Label = label,
                Path = path,
                Collapsed = type != "G" // collapse everything except for groups (type == "G:")
            };
            
            if (parent != null)
            {
                parent.Items.Add(section);
            }
            else
            {
                Items.Add(section);
            }

            if (parent == null || section.Level > _currentParent?.Level)
            {
                _currentParent = section;
            }
        }
    
        public void GenerateSidebarsJs(string sidebarFilePath)
        {
            var sb = new StringBuilder();
        
            // Add TypeScript comments
            sb.AppendLine("// @ts-check");
            sb.AppendLine();
            sb.AppendLine("/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */");
            sb.AppendLine("const sidebars = {");
            sb.AppendLine();
            sb.AppendLine("  documentationSidebar: [");

            var lastSection = Items.Last();
            foreach (var section in Items)
            {
                sb.Append(section.ToJson());
                if (section != lastSection)
                {
                    sb.AppendLine(",");
                }
                else
                {
                    sb.AppendLine();
                }
            }

            sb.AppendLine("  ],");
            sb.AppendLine("};");
            sb.AppendLine();
            sb.AppendLine("module.exports = sidebars;");

            File.WriteAllText(sidebarFilePath, sb.ToString());
        }
    }
}