# CalculateDistanceFromAncestor Method


Calculates the distance from a visual's ancestor.



## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static int CalculateDistanceFromAncestor(
	this Visual visual,
	Visual? ancestor
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function CalculateDistanceFromAncestor ( 
	visual As Visual,
	ancestor As Visual
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member CalculateDistanceFromAncestor : 
        visual : Visual * 
        ancestor : Visual -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualTree/VisualExtensions.cs#L26" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The ancestor visual.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The number of steps from the visual to the ancestor or -1 if *visual* is not a descendent of *ancestor*.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Visual">Visual</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions Class</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  
