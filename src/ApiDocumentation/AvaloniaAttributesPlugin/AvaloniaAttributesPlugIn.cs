using SandcastleBuilder.Utils.BuildComponent;
using SandcastleBuilder.Utils.BuildEngine;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Linq;

// Search for "TODO" to find changes that you need to make to this plug-in template.

namespace AvaloniaAttributes
{
    /// <summary>
    /// TODO: Set your plug-in's unique ID and description in the export attribute below.
    /// </summary>
    /// <remarks>The <c>HelpFileBuilderPlugInExportAttribute</c> is used to export your plug-in so that the help
    /// file builder finds it and can make use of it.  The example below shows the basic usage for a common
    /// plug-in.  Set the additional attribute values as needed:
    ///
    /// <list type="bullet">
    ///     <item>
    ///         <term>RunsInPartialBuild</term>
    ///         <description>Set this to true if your plug-in should run in partial builds used to generate
    /// reflection data for the API Filter editor dialog or namespace comments used for the Namespace Comments
    /// editor dialog.  Typically, this is left set to false.</description>
    ///     </item>
    /// </list>
    /// 
    /// Plug-ins are singletons in nature.  The composition container will create instances as needed and will
    /// dispose of them when the container is disposed of.</remarks>
    [HelpFileBuilderPlugInExport("AvaloniaAttributes", Version = AssemblyInfo.ProductVersion,
        Copyright = AssemblyInfo.Copyright, Description = "AvaloniaAttributes plug-in")]
    public sealed class AvaloniaAttributesPlugIn : IPlugIn
    {
        #region Private data members

        //=====================================================================

        private List<ExecutionPoint> executionPoints;

        private BuildProcess builder;

        #endregion

        #region IPlugIn implementation

        //=====================================================================

        /// <summary>
        /// This read-only property returns a collection of execution points that define when the plug-in should
        /// be invoked during the build process.
        /// </summary>
        public IEnumerable<ExecutionPoint> ExecutionPoints
        {
            get
            {
                if (executionPoints == null)
                    executionPoints = new List<ExecutionPoint>
                    {
                        new ExecutionPoint(BuildStep.GenerateReflectionInfo, ExecutionBehaviors.Before),
                        new ExecutionPoint(BuildStep.ApplyDocumentModel, ExecutionBehaviors.Before),
                    };

                return executionPoints;
            }
        }

        /// <summary>
        /// This method is used to initialize the plug-in at the start of the build process
        /// </summary>
        /// <param name="buildProcess">A reference to the current build process</param>
        /// <param name="configuration">The configuration data that the plug-in should use to initialize itself</param>
        public void Initialize(BuildProcess buildProcess, XElement configuration)
        {
            builder = buildProcess;

            var metadata = (HelpFileBuilderPlugInExportAttribute)this.GetType().GetCustomAttributes(
                typeof(HelpFileBuilderPlugInExportAttribute), false).First();

            builder.ReportProgress("{0} Version {1}\r\n{2}", metadata.Id, metadata.Version, metadata.Copyright);

            // TODO: Add your initialization code here such as reading the configuration data
        }

        /// <summary>
        /// This method is used to execute the plug-in during the build process
        /// </summary>
        /// <param name="context">The current execution context</param>
        public void Execute(ExecutionContext context)
        {
            switch (context.BuildStep)
            {
                case BuildStep.GenerateReflectionInfo:
                    AddAvaloniaAttributesToReflectionInfo(context);
                    break;
                case BuildStep.ApplyDocumentModel:
                    FilterPrivateApi(context);
                    break;
            }
        }

        private void AddAvaloniaAttributesToReflectionInfo(ExecutionContext context)
        {
            builder.ReportProgress("Adding PrivateApi-Attribute");

            string configFile = Path.Combine(builder.WorkingFolder, "MRefBuilder.config");

            var config = XDocument.Load(configFile);
            var currentFilter = config.Root.Descendants("attributeFilter").FirstOrDefault();

            if (currentFilter != null)
                currentFilter.Add(new XElement("namespace", new XAttribute("name", "Avalonia.Metadata"),
                    new XAttribute("expose", "true"),
                    new XElement("type", new XAttribute("name", "PrivateApiAttribute"),
                        new XAttribute("expose", "true"))));

            config.Save(configFile);

            return;
        }

        private void FilterPrivateApi(ExecutionContext context)
        {
            // Copy idea of the `XPathReflectionFileFilterPlugIn`, but with also removing all items having a specific attribute
            
            XmlDocument refInfo = new XmlDocument();

            refInfo.Load(builder.ReflectionInfoFilename);

            int counter = 0;

            var nodes = refInfo.SelectNodes("/reflection/apis/api[contains(@id, 'Impl')]");
            
            // Remove all Nodes whose name ends with "impl"
            foreach (XmlNode node in nodes)
            {
                if (node is XmlElement element && element.GetAttribute("id") is string attr)
                {
                    if (attr.EndsWith("Impl") || attr.Contains("Impl."))
                    {
                        element.ParentNode.RemoveChild(element);
                        
                        RemoveApiRecursive(refInfo, element?.GetAttribute("id"), ref counter);
                    }
                }
                counter++;
            }
            
            // foreach(string expression in expressions)
            // {
            //     builder.ReportProgress("Removing items matching '{0}'", expression);
            //
            //     XmlNodeList nodes = refInfo.SelectNodes(expression);
            //
            //     foreach(XmlNode node in nodes)
            //         node.ParentNode.RemoveChild(node);

            builder.ReportProgress("    Removed {0} items", counter);


            refInfo.Save(builder.ReflectionInfoFilename);
        }

        private void RemoveApiRecursive(XmlDocument refInfo, string apiName, ref int counter)
        {
            var nodes = refInfo.SelectNodes($"//*[contains(@api, '{apiName}')]");
            
            foreach (XmlNode node in nodes)
            {
                node.ParentNode.RemoveChild(node);
                counter++;
                RemoveApiRecursive(refInfo, (node as XmlElement)?.GetAttribute("api"), ref counter);
            }
        }
        
        #endregion

        #region IDisposable implementation

        //=====================================================================

        // TODO: If the plug-in hasn't got any disposable resources, this finalizer can be removed
        /// <summary>
        /// This handles garbage collection to ensure proper disposal of the plug-in if not done explicitly
        /// with <see cref="Dispose()"/>.
        /// </summary>
        ~AvaloniaAttributesPlugIn()
        {
            this.Dispose();
        }

        /// <summary>
        /// This implements the Dispose() interface to properly dispose of the plug-in object
        /// </summary>
        public void Dispose()
        {
            // TODO: Dispose of any resources here if necessary
            GC.SuppressFinalize(this);
        }

        #endregion
    }
}