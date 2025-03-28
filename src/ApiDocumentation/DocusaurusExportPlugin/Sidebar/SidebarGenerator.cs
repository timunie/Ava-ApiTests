using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Linq;

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
        public IEnumerable<SidebarSection> Items => _itemsCache
            .OrderBy(x => x.Key)
            .Select(x => x.Value);
        
        private readonly Dictionary<string, SidebarSection> _itemsCache = new();
        
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

        private (string, string) GetAssemblyAndNamespace(string content)
        {
            string? namespaceName = null, assemblyName = null;
            
            foreach (var line in content.Split('\n', '\r'))
            {
                if (line.StartsWith("**Namespace:** "))
                {
                    namespaceName = line.Replace("**Namespace:** ", "");
                    namespaceName = XElement.Parse(namespaceName).Value;
                }
                if (line.StartsWith("**Assembly:** "))
                {
                    assemblyName = line.Replace("**Assembly:** ", "").Split(' ').First();
                }

                if (assemblyName is not null && namespaceName is not null)
                {
                    return (assemblyName, namespaceName);
                }
            }
            throw new AggregateException("Unable to find assembly and namespace name.");
        }

        private string GetPackageNameFromAssemblyName(string assemblyName)
        {
            return DocusaurusExportPluginPlugIn.AssemblyPackageMapping!.TryGetValue(assemblyName, out var packageName) ?
                packageName :
                assemblyName;
        }

        private SidebarSection GetOrAddSection(string assemblyName, string? classes = null)
        {
            if (_itemsCache.TryGetValue(assemblyName, out var section))
            {
                return section;
            }
            else
            {
                _itemsCache[assemblyName] = new SidebarSection(null)
                {
                    Label = assemblyName,
                    Level = 1, 
                    Classes = classes
                };
                return _itemsCache[assemblyName];
            }
        }
        
        /// <summary>
        /// Adds a new item to the sidebar
        /// </summary>
        /// <param name="id">the id of the section</param>
        /// <param name="path">the path to link</param>
        /// <param name="label">the label to display</param>
        /// <param name="content">the content of the page</param>
        public void AddItem(string id, string path, string label, string content)
        {
            if (id.Split(':').FirstOrDefault() != "T") return;

            var containerInfo = GetAssemblyAndNamespace(content);
            
            var packageSection = GetOrAddSection(GetPackageNameFromAssemblyName(containerInfo.Item1), "icon assembly-icon");
            var namespaceSection = packageSection.GetOrAddSection(containerInfo.Item2, classes: "icon namespace-icon");

            namespaceSection.GetOrAddSection(label, path);
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