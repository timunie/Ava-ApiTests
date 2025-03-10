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
                @"C:\Users\timun\source\repos\_OSS\Ava-ApiTests\src\ApiDocumentation\TestProject\TestFiles\reflection.xml";

            var processed =
                @"C:\Users\timun\source\repos\_OSS\Ava-ApiTests\src\ApiDocumentation\TestProject\TestFiles\mod.xml";

            XDocument refInfo = XDocument.Load(original);

            int counter = 0;

            var nodes = refInfo.XPathSelectElements("/reflection/apis/api[contains(@id, 'Impl')]").ToList();

            // Remove all Nodes whose name ends with "impl"
            foreach (var node in nodes)
            {
                if (node.Attribute("id")?.Value is { } attr)
                {
                    if ((attr.EndsWith("Impl") || attr.Contains("Impl.")) && node.Parent != null)
                    {
                        node.Remove();
                        RemoveApiRecursive(refInfo, node?.Attribute("id")?.Value, ref counter);
                    }
                }

                counter++;
            }

            Console.WriteLine("    Removed {0} for expression '{1}'", counter,
                "/reflection/apis/api[contains(@id, 'Impl')]");

            nodes = refInfo
                .XPathSelectElements(
                    "/reflection/apis/api[attributes/attribute/type/@api='T:Avalonia.Metadata.PrivateApiAttribute']")
                .ToList();

            // Remove all Nodes with Attribute "PrivateApi"
            foreach (var node in nodes)
            {
                if (node.Parent != null)
                {
                    node.Remove();
                    RemoveApiRecursive(refInfo, node?.Attribute("id")?.Value, ref counter);
                }
            }

            counter++;


            Console.WriteLine("    Removed {0} items in total", counter);
            // builder.ReportProgress();


            refInfo.Save(processed);
        }

        private static void RemoveApiRecursive(XDocument refInfo, string? apiName, ref int counter)
        {
            if (apiName == null) return;

            var nodes = refInfo.XPathSelectElements($"//*[contains(@api, '{apiName}')]").ToList();

            foreach (var node in nodes)
            {
                if (node.Parent != null)
                {
                    node.Remove();
                    counter++;

                    if (node.Attribute("api")?.Value != apiName)
                    {
                        RemoveApiRecursive(refInfo, node.Attribute("api")?.Value, ref counter);
                    }
                }
            }
            
            nodes = refInfo.XPathSelectElements($"//*[contains(@id, '{apiName}')]").ToList();

            foreach (var node in nodes)
            {
                if (node.Parent != null)
                {
                    node.Remove();
                    counter++;

                    if (node.Attribute("id")?.Value != apiName)
                    {
                        RemoveApiRecursive(refInfo, node.Attribute("id")?.Value, ref counter);
                    }
                }
            }
        }
    }
}