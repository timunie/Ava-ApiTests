using System.Collections.Generic;
using System.Xml;
using System.Xml.Linq;
using System.Xml.XPath;

namespace TestProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var test = new TestClass1() { TestProperty = "Hello, {0}" };

            // Console.WriteLine(test.GetTestPropertyFormatted("World"));

            FilterPrivateApi();
        }

        private static void FilterPrivateApi()
        {
            // Copy idea of the `XPathReflectionFileFilterPlugIn`, but with also removing all items having a specific attribute

            var original =
                @"C:\Users\uniewski\source\repos\_OSS\Ava-ApiTests\src\ApiDocumentation\TestProject\TestFiles\reflection.xml";

            var processed =
                @"C:\Users\uniewski\source\repos\_OSS\Ava-ApiTests\src\ApiDocumentation\TestProject\TestFiles\mod.xml";

            XDocument refInfo = XDocument.Load(original);

            int counter = 0;
            
            // Remove all Nodes whose id ends with "Impl"
            var nodes = refInfo.XPathSelectElements("/reflection/apis/api[contains(@id, 'Impl')]");

            
            foreach (var node in nodes)
            {
                if (node.Attribute("id")?.Value is { } attr)
                {
                    if ((attr.EndsWith("Impl") || attr.Contains("Impl.")) && node.Parent != null)
                    {
                        node.Remove();
                        // RemoveApiRecursive(refInfo, node?.Attribute("id")?.Value, ref counter);
                    }
                }

                counter++;
            }
            
            Console.WriteLine("    Removed {0} for expression '{1}'", counter,
                "/reflection/apis/api[contains(@id, 'Impl')]");


            // -------------------------------------------------------------------------------------------------------------------
            // Remove all Nodes whose api-name ends with "Impl"

            nodes = refInfo.XPathSelectElements("/reflection/apis/api/elements/element[contains(@api, 'Impl')]");

            // Remove all Nodes whose name ends with "impl"
            foreach (var node in nodes)
            {
                if (node.Attribute("api")?.Value is { } attr)
                {
                    if ((attr.EndsWith("Impl") || attr.Contains("Impl.")))
                    {
                        node.Remove();
                        // RemoveApiRecursive(refInfo, node?.Attribute("api")?.Value, ref counter);
                    }
                }

                counter++;
            }

            Console.WriteLine("    Removed {0} for expression '{1}'", counter,
                "/reflection/apis/api/elements/element[contains(@api, 'Impl')]");


            // -------------------------------------------------------------------------------------------------------------------
            // Remove all Nodes with PrivateApi-Attribute

            nodes = refInfo
                .XPathSelectElements(
                    "/reflection/apis/api[attributes/attribute/type/@api='T:Avalonia.Metadata.PrivateApiAttribute']")
                .ToList();

            HashSet<string> childrenToRemove = new HashSet<string>();

            // Remove all Nodes with Attribute "PrivateApi"
            foreach (var node in nodes)
            {
                var children = node.Descendants("element")
                    .Select(x => x.Attribute("api")?.Value ?? string.Empty)
                    .Where(x => x?.Contains("Avalonia") ?? false);

                foreach (var child in children)
                {
                    childrenToRemove.Add(child);
                }
                
                if (node.Parent != null)
                {
                    node.Remove();
                    childrenToRemove.Add(node.Attribute("id")?.Value ?? string.Empty);
                    counter++;
                    // RemoveApiRecursive(refInfo, node?.Attribute("id")?.Value, ref counter);
                }
            }

            // collect all elements from types to remove
            foreach (var item in childrenToRemove.Where(x => x.StartsWith("T:")).ToArray())
            {
                nodes = refInfo
                    .XPathSelectElements(
                        $"/reflection/apis/api[contains(@id, '{item}')]");

                foreach (var node in nodes)
                {
                    var children = node.Descendants("element")
                                        .Select(x => x.Attribute("api")?.Value ?? string.Empty)
                                        .Where(x => x?.Contains("Avalonia") ?? false);

                    childrenToRemove.Add(node.Attribute("id").Value ?? string.Empty);

                    foreach (var child in children)
                    {
                        childrenToRemove.Add(child);
                    }
                }
            }

            foreach (var child in childrenToRemove)
            {
                nodes = refInfo
                    .XPathSelectElements(
                        $"/reflection/apis/api/elements/element[contains(@api, '{child}')]");

                foreach (var node in nodes)
                {
                    if (node.Parent != null)
                    {
                        node.Remove();
                        counter++;
                    }
                }

                nodes = refInfo
                    .XPathSelectElements(
                        $"/reflection/apis/api[contains(@id, '{child}')]");

                foreach (var node in nodes)
                {
                    if (node.Parent != null)
                    {
                        node.Remove();
                        counter++;
                    }
                }
            }

            Console.WriteLine("    Removed {0} items in total", counter);
            // builder.ReportProgress();


            refInfo.Save(processed);
        }

    }
}