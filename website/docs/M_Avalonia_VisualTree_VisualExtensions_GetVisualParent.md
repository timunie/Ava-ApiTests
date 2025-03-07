# GetVisualParent(Visual) Method


Gets the visual parent of an <a href="T_Avalonia_Visual">Visual</a>.



## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Visual? GetVisualParent(
	this Visual visual
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetVisualParent ( 
	visual As Visual
) As Visual
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetVisualParent : 
        visual : Visual -> Visual 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualTree/VisualExtensions.cs#L420" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual.</dd></dl>

#### Return Value
<a href="T_Avalonia_Visual">Visual</a>  
The parent, or null if the visual is unparented.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions Class</a>  
<a href="Overload_Avalonia_VisualTree_VisualExtensions_GetVisualParent">GetVisualParent Overload</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  
