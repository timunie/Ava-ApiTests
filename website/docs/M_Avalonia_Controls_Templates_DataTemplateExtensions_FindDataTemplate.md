import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FindDataTemplate Method


Find a data template that matches a piece of data.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDataTemplate? FindDataTemplate(
	this Control control,
	Object data,
	IDataTemplate primary = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function FindDataTemplate ( 
	control As Control,
	data As Object,
	Optional primary As IDataTemplate = Nothing
) As IDataTemplate
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member FindDataTemplate : 
        control : Control * 
        data : Object * 
        ?primary : IDataTemplate 
(* Defaults:
        let _primary = defaultArg primary null
*)
-> IDataTemplate 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/DataTemplateExtensions.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control searching for the data template.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The data.</dd><dt>  <a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>  (Optional)</dt><dd>An optional primary template that can will be tried before the DataTemplates in the tree are searched.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>  
The data template or null if no matching data template was found.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_Control">Control</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
