using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DocusaurusExportPlugin.Sidebar
{
    /// <summary>
    /// Defines an item in the Docusaurus-Sidebar
    /// </summary>
    public class SidebarSection
    {
        public SidebarSection(SidebarSection? parent)
        {
            Parent = parent;
        }

        /// <summary>
        /// Gets or sets the Level of the item
        /// </summary>
        public int Level { get; set; }
        
        /// <summary>
        /// Gets the indentation for an item
        /// </summary>
        /// <param name="level">the level of the item</param>
        /// <returns>a comuted number of whitespaces</returns>
        private static string GetIndentation(int level) => new string(' ', level * 2 + 4);
        
        /// <summary>
        /// Gets or sets the DisplayString
        /// </summary>
        public string? Label { get; set; }
        
        /// <summary>
        /// Gets or sets the link target for this section
        /// </summary>
        public string? Path { get; set; }
        
        /// <summary>
        /// Gets the parent of this Section
        /// </summary>
        public SidebarSection? Parent { get; }
        
        /// <summary>
        /// Gets a List of child items
        /// </summary>
        public IEnumerable<SidebarSection> Items => _itemsCache
            .OrderBy(x => x.Key)
            .Select(x => x.Value);
        
        private readonly Dictionary<string, SidebarSection> _itemsCache = new();
        
        /// <summary>
        /// Gets or sets if the item is collapsed or expanded. 
        /// </summary>
        /// <remarks>
        /// This property has only an effect for category items
        /// </remarks>
        public bool Collapsed { get; set; }
        
        public SidebarSection GetOrAddSection(string assemblyName, string? path = null)
        {
            if (_itemsCache.TryGetValue(assemblyName, out var section))
            {
                return section;
            }
            else
            {
                _itemsCache[assemblyName] = new SidebarSection(this)
                {
                    Label = assemblyName,
                    Level = Level + 1, 
                    Path = path
                };
                return _itemsCache[assemblyName];
            }
        }

        public string ToJson()
        {
            if (_itemsCache.Count == 0)
            {
                return ToLinkItemJson();
            }
            else
            {
                return ToCategoryJson();
            }
        }
        
        private string ToLinkItemJson()
        {
            var indent = GetIndentation(Level);
            var sb = new StringBuilder();
        
            sb.AppendLine($"{indent}{{");
            sb.AppendLine($"{indent}  'type': 'doc',");
            sb.AppendLine($"{indent}  'label': '{Label}',");
            sb.AppendLine($"{indent}  'id': '{Path}',");
            sb.AppendLine($"{indent}}}");
        
            return sb.ToString();
        }
        
        private string ToCategoryJson()
        {
            var indent = GetIndentation(Level);
            var sb = new StringBuilder();
        
            sb.AppendLine($"{indent}{{");
            sb.AppendLine($"{indent}  'type': 'category',");
            sb.AppendLine($"{indent}  'label': '{Label}',");
        
            // Only include collapsed if it's true (to match desired format)
            if (Collapsed)
            {
                sb.AppendLine($"{indent}  'collapsed': {Collapsed.ToString().ToLower()},");
            }

            if (!string.IsNullOrWhiteSpace(Path))
            {
                sb.AppendLine($"{indent}  'link': {{type: 'doc', id: '{Path}'}},");
            }
        
            sb.AppendLine($"{indent}  'items': [");

            var lastItem = Items.LastOrDefault();
            foreach (var item in Items)
            {
                sb.Append(item.ToJson());
                if (item != lastItem)
                {
                    sb.AppendLine(",");
                }
                else
                {
                    sb.AppendLine();
                }
            }

            sb.Append($"{indent}  ]");
            sb.Append($"\n{indent}}}");

            return sb.ToString();
        }
    }
}