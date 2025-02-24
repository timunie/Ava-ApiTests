using System.Xml.Linq;
using SandcastleBuilder.Utils.BuildComponent;
using SandcastleBuilder.Utils.BuildEngine;
using ExecutionContext = SandcastleBuilder.Utils.BuildComponent.ExecutionContext;

namespace MarkdownExportPlugin;

[HelpFileBuilderPlugInExport("DocusaurusExportPlugin", Copyright = "", Version = "1.0", Description = "DocusaurusExportPlugin")]
public class DocusaurusExportPlugin : IPlugIn
{
    BuildProcess? _buildProcess;
    
    public void Dispose()
    {
        
    }

    public void Initialize(BuildProcess buildProcess, XElement configuration)
    {
        _buildProcess = buildProcess;
    }

    public void Execute(ExecutionContext context)
    {
        if (context.BuildStep == BuildStep.CompilingHelpFile)
        {
            new DocusaurusMarkdownContentGenerator(_buildProcess!).Execute();
        }
    }

    public IEnumerable<ExecutionPoint> ExecutionPoints { get; } =
    [
        new ExecutionPoint(BuildStep.CompilingHelpFile, ExecutionBehaviors.InsteadOf)
    ];
}