using System;
using System.Linq;
using System.Xml.Linq;
using Sandcastle.Core.PresentationStyle.Transformation;
using Sandcastle.Core.PresentationStyle.Transformation.Elements;

namespace DocusaurusPresentationStyle.DocusaurusMarkdown.Elements;

public class MdxRemarksElement(string name) : NamedSectionElement(name)
{
    /// <inheritdoc />
    public override void Render(TopicTransformationCore transformation, XElement element)
    {
        if (transformation.CurrentElement.Name == "document")
        {
            base.Render(transformation, element);
            return;
        }
        
        
        if (transformation == null)
            throw new ArgumentNullException(nameof (transformation));
        if (element == null)
            throw new ArgumentNullException(nameof (element));
        if (!element.Elements().Any<XElement>() && element.Value.NormalizeWhiteSpace().Length == 0)
            return;

        transformation.RenderNode(new XElement("span", "**Remarks:** "));
        transformation.RenderChildElements(transformation.CurrentElement, element.Nodes());
    }
}
