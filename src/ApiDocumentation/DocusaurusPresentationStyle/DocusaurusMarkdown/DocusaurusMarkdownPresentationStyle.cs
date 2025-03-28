// TODO: Header

using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Sandcastle.Core;
using Sandcastle.Core.PresentationStyle;

namespace DocusaurusPresentationStyle.DocusaurusMarkdown
{
    /// <summary>
    /// This defines a presentation style used to generate markdown content (Docusaurus flavored)
    /// </summary>
    [PresentationStyleExport("DocusaurusMarkdown", "Markdown Content (Docusaurus compatible)", Version = AssemblyInfo.ProductVersion,
      Copyright = AssemblyInfo.Copyright, Description = "This generates markdown content (Docusaurus compatible)")]
    public sealed class DocusaurusMarkdownPresentationStyle : PresentationStyleSettings
    {
        /// <inheritdoc />
        public override string Location => ComponentUtilities.AssemblyFolder(Assembly.GetExecutingAssembly());

        /// <summary>
        /// Constructor
        /// </summary>
        public DocusaurusMarkdownPresentationStyle()
        {
            // The base path of the presentation style files relative to the assembly's location
            BasePath = "DocusaurusMarkdown";

            SupportedFormats = HelpFileFormats.Markdown;

            SupportsNamespaceGrouping = true;

            DocumentModelApplicator = new StandardDocumentModel();
            ApiTableOfContentsGenerator = new StandardApiTocGenerator();
            TopicTransformation = new DocusaurusMarkdownTransformation(ResolvePath);

            // If relative, these paths are relative to the base path
            BuildAssemblerConfiguration = @"Configuration\BuildAssembler.config";
        }

        /// <inheritdoc />
        /// <remarks>This presentation style uses the standard shared content and overrides a few items with
        /// Markdown specific values.</remarks>
        public override IEnumerable<string> ResourceItemFiles(string languageName)
        {
            string filePath = ResolvePath(@"..\Shared\Content"),
                fileSpec = "SharedContent_" + languageName + ".xml";

            if(!File.Exists(Path.Combine(filePath, fileSpec)))
                fileSpec = "SharedContent_en-US.xml";

            yield return Path.Combine(filePath, fileSpec);

            fileSpec = "Markdown_" + languageName + ".xml";

            if(!File.Exists(Path.Combine(filePath, fileSpec)))
                fileSpec = "Markdown_en-US.xml";

            yield return Path.Combine(filePath, fileSpec);

            foreach(string f in AdditionalResourceItemsFiles)
                yield return f;
        }
    }
}
